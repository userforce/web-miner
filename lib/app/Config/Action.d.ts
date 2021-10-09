import { ActionInterface } from "../Constrains/ActionInterface";
import { Parameters } from "./Parameters";
import * as Actions from '../Actions';
export declare class Action implements ActionInterface {
    name: string;
    params: Parameters;
    constructor(name: string, params: Parameters);
    getActionInstance(): Actions.Action;
    toJson(): string;
}
