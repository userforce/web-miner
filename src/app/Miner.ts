import { Browser, Page } from "puppeteer";
import { Action } from "./Config/Action";
import { Workflow } from "./Config/Workflow";
import { ActionInterface } from "./Constrains/ActionInterface";
import { Results } from "./Scraper/Reults";
import { Scraper } from "./Scraper/Scraper";

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

export class Miner {

    private browser: (Browser|any);
    private windowWidth: number = 1400;
    private windowHeight: number = 1000;

    constructor(private config: {} = {}, private requestsToPrevent?: RegExp){}

    public setRequestsToPrevent(requestsToPrevent: RegExp): void
    {
        this.requestsToPrevent = requestsToPrevent;
    }

    public setBrowser(browser: Browser): void
    {
        this.browser = browser;
    }

    public pushConfig(config: {}): void
    {
        this.config = Object.assign(this.config, config);
    }

    public async scrape(jsonConfig: (string|Array<ActionInterface>)): Promise<any>
    {
        let results = new Results();
        try {
            await this.init();

            let userConfig: Array<ActionInterface> = typeof jsonConfig === 'string' ? JSON.parse(jsonConfig) : jsonConfig;
            let workflow: Workflow = Workflow.fromObject(userConfig);
            await this.run(workflow, results);

        } catch (e) {
            console.log(e);
            if (!!this.browser) {
                await this.browser.close();
            }
            throw e;
        }
        await this.browser.close();

        return results;
    }

    private async run(workflow: Workflow, results: Results): Promise<Results> {
        let page: Page = await this.browser.newPage();
        this.stealthPage(page);
        page.setViewport({
            width: this.windowWidth, 
            height: this.windowHeight,
            isMobile: false
        });
        let scraper: Scraper = new Scraper(page);
        let skipTo: string = 'no';
        for (let i in workflow.actions) {
            if (skipTo != 'no') {
                let next = +skipTo;
                if (next != NaN && parseInt(i) == (parseInt(skipTo) - 1)) {
                    skipTo = 'no';
                } else {
                    continue;
                }
            }
            let action: Action = workflow.actions[i];
            let actionResult = await scraper.runAction(action, results);
            if (action.name == 'condition' && actionResult == true) {
                skipTo = action.params.value;
            }
        }
        
        return results;
    }

    private async stealthPage(page: Page): Promise<void>
    {
        if (this.requestsToPrevent instanceof RegExp) {
            await page.setRequestInterception(true);
            page.on('request', request => {
                let regex: RegExp = this.requestsToPrevent instanceof RegExp ? this.requestsToPrevent : / \\ \/ \?/i;
                if (regex.test(request.url())) {
                    request.abort();
                } else {
                    request.continue();
                }
            });
        }
    }

    private async init() 
    {
        if (this.browser == undefined) {
            let browserConfig = Object.assign(this.config, {
                args: [`--window-size=${this.windowWidth},${this.windowHeight}`]
            });
            this.browser = await puppeteer.launch(browserConfig);
        }
    }

}