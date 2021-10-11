import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";

export class Delay extends Action {

    public async execute(page: Page, params: Parameters): Promise<any>
    {
        await this.sleep(params.value);

        return page.url();
    }

    private async sleep(ms: string) 
    {
        await new Promise(resolve => setTimeout(resolve, parseInt(ms)));
    }

}