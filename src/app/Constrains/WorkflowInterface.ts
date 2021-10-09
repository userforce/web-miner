import { ConfigInterface } from "./ConfigInterface";
import { ActionInterface } from "./ActionInterface";

export interface WorkflowInterface extends ConfigInterface {
    actions: Array<ActionInterface>;
}