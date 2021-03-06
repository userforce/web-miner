import { Action } from "../Actions/Action";
import { Parameters } from "../Config/Parameters";
import { ConfigInterface } from "./ConfigInterface";
import { ParametersInterface } from "./ParametersInterface";

export interface ActionInterface extends ConfigInterface {
    name: string;
    params: ParametersInterface;

    getAction?(): Action;
}