import { ElementHandle, Page, ScreenshotOptions } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";
import { ConfigurationException } from "../Exceptions/ConfigurationException";

export class Screenshot extends Action {

    /**
     * 
     * @param page 
     * @param params 
     */
    public async execute(page: Page, params: Parameters): Promise<any>
    {
        if (!params.value) {
            throw new ConfigurationException("Screenshot Error: Plese specify full path to the screenshot in the \"value\" configuration property.");
        }
        let screenConfig: ScreenshotOptions = {
            path: `${params.value}.png`
        };

        let screenArea: (Page|ElementHandle<Element>) = await this.findScreenshotElement(page, params);

        await screenArea.screenshot(screenConfig);

        return params.value;
    }

    /**
     * 
     * @param page 
     * @param params 
     * @returns 
     */
    private async findScreenshotElement(page: Page, params: Parameters): Promise<Page|ElementHandle<Element>>
    {
        let selector: string = params.selector || "body";

        try {
            await page.waitForSelector(selector, {timeout: 10000});
        } catch (e) {
            throw new ConfigurationException("Screenshot Error: DOM element of the given selector not found.");
        }
        let element: (Page|ElementHandle<Element>|null) = await page.$(selector);

        return element || page;
    }

}