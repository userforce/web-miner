import { Action } from "../Config/Action";

/** @template T */
export class Results extends Array {

    constructor(...items: any[]) {
        super(...items);
        Object.setPrototypeOf(this, Results.prototype);
    }

    /**
     * 
     * @param action 
     * @param result 
     */
    public add(action: Action, value: any): void
    {
        this.push({
            action: action,
            result: value
        });
    }

}