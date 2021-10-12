import { Page } from "puppeteer";
import { Action } from "../Config/Action";
import * as Actions from "../Actions"; 
import { Results } from "./Reults";

export class Scraper {

    constructor(private page: Page) {}

    public async runAction(actionConfig: Action, results: Results): Promise<any> 
    {
        let action: Actions.Action = actionConfig.getActionInstance();
        let result = await action.execute(this.page, actionConfig.params);

        results.add(actionConfig, result);

        return result;
    }

}