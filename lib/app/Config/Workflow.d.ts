import { WorkflowInterface } from "../Constrains/WorkflowInterface";
import { Action } from "./Action";
import { ActionInterface } from "../Constrains/ActionInterface";
export declare class Workflow implements WorkflowInterface {
    actions: Array<Action>;
    constructor(actions?: Array<Action>);
    static fromObject(actions: Array<ActionInterface>): Workflow;
    toJson(): string;
}
