import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Select extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await page.waitForSelector(params.selector);
        page.select(params.selector, params.value);

        return params.value;
    }

}