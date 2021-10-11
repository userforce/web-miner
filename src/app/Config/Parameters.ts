import { KeyInput } from "puppeteer";
import { ParametersInterface } from "../Constrains/ParametersInterface";

const selectorValidationRegex = /^([a-zA-Z]|\.|\#)/i;

export class Parameters implements ParametersInterface {

    constructor(public value: (string|KeyInput) = '', public selector: string = '') {}

    toJson(): string {
        throw new Error("Method not implemented.");
    }

} 