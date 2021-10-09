import { Page } from "puppeteer";
import { Action } from "../Config/Action";
import { Results } from "./Reults";
export declare class Scraper {
    private page;
    constructor(page: Page);
    runAction(actionConfig: Action, results: Results): Promise<void>;
}
