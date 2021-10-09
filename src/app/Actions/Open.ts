import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Open extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await page.goto(params.value);

        return page.url();
    }

}