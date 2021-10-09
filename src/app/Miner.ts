import * as puppeteer from "puppeteer";
import { Browser, Page } from "puppeteer";
import { Action } from "./Config/Action";
import { Workflow } from "./Config/Workflow";
import { ActionInterface } from "./Constrains/ActionInterface";
import { Results } from "./Scraper/Reults";
import { Scraper } from "./Scraper/Scraper";

export class Miner {

    // There is a bug in puppeteer that don't let us import and use launch directly
    private browser: (Browser|any);

    public async scrape(jsonConfig: (string|Array<ActionInterface>)): Promise<any>
    {
        let results = new Results();
        try {
            await this.init();

            let userConfig: Array<ActionInterface> = typeof jsonConfig === 'string' ? JSON.parse(jsonConfig) : jsonConfig;
            let workflow: Workflow = Workflow.fromObject(userConfig);
            await this.run(workflow, results);

        } catch (e) {
            if (this.browser instanceof Browser) {
                await this.browser.close();
            }
        }
        await this.browser.close();

        return results;
    }

    private async run(workflow: Workflow, results: Results): Promise<Results> {
        let page: Page = await this.browser.newPage();
        let scraper: Scraper = new Scraper(page);
        for (let i in workflow.actions) {
            let action: Action = workflow.actions[i];
            
            await scraper.runAction(action, results);
        }

        return results;
    }

    private async init() 
    {
        // There is a bug in puppeteer that don't let us import and use launch directly
        this.browser = await puppeteer.launch();
    }

}