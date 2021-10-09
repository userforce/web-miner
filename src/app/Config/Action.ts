import { ActionInterface } from "../Constrains/ActionInterface";
import { Parameters } from "./Parameters";
import * as Actions from '../Actions';
import { ConfigurationException } from "../Exceptions/ConfigurationException";

export class Action implements ActionInterface {

    constructor(public name: string, public params: Parameters) {}

    getActionInstance(): Actions.Action 
    {
        let className = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
        try {
            let actionInstance: any = new (<any>Actions)[className]();

            return actionInstance;
        } catch (error) {
            throw new ConfigurationException(`Action "${this.name}" not supported.`);
        }
    };

    toJson(): string 
    {
        throw new Error("Method not implemented.");
    }

} 