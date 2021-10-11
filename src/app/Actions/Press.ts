import { KeyInput, Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Press extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        let key: KeyInput = params.value as KeyInput;
        await page.keyboard.press(key);

        return page.url();
    }

}