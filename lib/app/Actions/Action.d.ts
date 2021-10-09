import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
export declare class Action {
    execute(page: Page, params: Parameters): any;
}
