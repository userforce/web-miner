import { Page } from "puppeteer";
import { Parameters } from "../Config/Parameters";

export class Action {
    public execute(page: Page, params: Parameters): any
    {
        throw new Error('Only Action derivates can be executed.');
    }
}