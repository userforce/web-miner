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
        page.setViewport({
            width: this.windowWidth, 
            height: this.windowHeight,
            isMobile: false
        });
        let scraper: Scraper = new Scraper(page);
        for (let i in workflow.actions) {
            let action: Action = workflow.actions[i];
            await scraper.runAction(action, results);
        }
        
        return results;
    }

    private async init() 
    {
        this.browser = await puppeteer
            .launch({
                args: [`--window-size=${this.windowWidth},${this.windowHeight}`]
            });
    }

}