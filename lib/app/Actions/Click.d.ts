import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";
export declare class Click extends Action {
    /**
     *
     * @param page
     * @param params
     * @returns
     */
    execute(page: Page, params: Parameters): Promise<any>;
}
