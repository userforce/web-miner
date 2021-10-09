import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";
import { Action } from "./Action";
export declare class Insert extends Action {
    execute(page: Page, params: Parameters): Promise<any>;
}
