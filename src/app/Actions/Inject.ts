import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Inject extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await page.addScriptTag({
            content: params.value
        });
    }

}