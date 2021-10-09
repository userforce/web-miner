import { ParametersInterface } from "../Constrains/ParametersInterface";
export declare class Parameters implements ParametersInterface {
    value: string;
    selector: string;
    constructor(value?: string, selector?: string);
    toJson(): string;
}
