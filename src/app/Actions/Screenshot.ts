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
            path: `${params.value}.png`,
            fullPage: !params.selector
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
        let element: (Page|ElementHandle<Element>|null) = page;
        if (!!params.selector) {
            try {
                await page.waitForSelector(params.selector, {timeout: 10000});
            } catch (e) {
                throw new ConfigurationException("Screenshot Error: DOM element of the given selector not found.");
            }
            element = await page.$(params.selector) ?? page;
            if (element == null) {

            } 
        }

        return element;
    }

}