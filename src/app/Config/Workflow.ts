import { WorkflowInterface } from "../Constrains/WorkflowInterface";
import { Action } from "./Action";
import { ActionInterface } from "../Constrains/ActionInterface";
import { Parameters } from "./Parameters";

export class Workflow implements WorkflowInterface {
    
    constructor(public actions: Array<Action> = []) {}

    public static fromObject(actions: Array<ActionInterface>): Workflow {
        let workflowActions: Array<Action> = [];
        for (let index in actions) {
            let { name, params } = actions[index];
            let { value, selector } = params;
            let parameters = new Parameters(value, selector);
            workflowActions.push(new Action(name, parameters));
        }
        return new this(workflowActions);
    }

    toJson(): string {
        throw new Error("Method not implemented.");
    }
    
}