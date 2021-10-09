import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Click extends Action {

    /**
     * 
     * @param page 
     * @param params 
     * @returns 
     */
    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await page.waitForSelector(params.selector);
        let element = await page.$(params.selector);
        await page.evaluate(function (element: HTMLElement) {
            element.click();
        }, element);

        return page.url();
    }

}