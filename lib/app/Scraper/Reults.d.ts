import { Action } from "../Config/Action";
/** @template T */
export declare class Results extends Array {
    constructor(...items: any[]);
    /**
     *
     * @param action
     * @param result
     */
    add(action: Action, value: any): void;
}
