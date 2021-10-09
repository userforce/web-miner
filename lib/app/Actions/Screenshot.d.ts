import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";
export declare class Screenshot extends Action {
    /**
     *
     * @param page
     * @param params
     */
    execute(page: Page, params: Parameters): Promise<any>;
    /**
     *
     * @param page
     * @param params
     * @returns
     */
    private findScreenshotElement;
}
