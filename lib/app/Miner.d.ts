import { ActionInterface } from "./Constrains/ActionInterface";
export declare class Miner {
    private browser;
    private windowWidth;
    private windowHeight;
    scrape(jsonConfig: (string | Array<ActionInterface>)): Promise<any>;
    private run;
    private init;
}
