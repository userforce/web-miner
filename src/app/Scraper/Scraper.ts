import { Page } from "puppeteer";
import { Action } from "../Config/Action";
import * as Actions from "../Actions"; 
import { Results } from "./Reults";

export class Scraper {

    constructor(private page: Page) {}

    public async runAction(actionConfig: Action, results: Results): Promise<void> 
    {
        let action: Actions.Action = actionConfig.getActionInstance();
        let result = action.execute(this.page, actionConfig.params);
        if (!!result) {
            results.push(result);
        }
    }

}