import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Condition extends Action {

    /**
     * Execute Condition action
     * @param page 
     * @param params 
     * @returns 
     */
    public async execute(page: Page, params: Parameters): Promise<boolean>
    {
        let found: boolean = false; 
        try {
            await page.waitForSelector(params.selector, {timeout: 7000});
            found = true;
        } catch (e) {}

        return found;
    }

}