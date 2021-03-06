import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Remember extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await page.waitForSelector(params.selector);
        let element = await page.$(params.selector);
        let value: string = await page.evaluate(el => el.innerText, element);

        return value;
    }

}