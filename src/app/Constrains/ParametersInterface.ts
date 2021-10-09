import { ConfigInterface } from "./ConfigInterface";

export interface ParametersInterface extends ConfigInterface {
    value?: string;
    selector?: string;
}