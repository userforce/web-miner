"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Actions = require("../Actions");
var ConfigurationException_1 = require("../Exceptions/ConfigurationException");
var Action = /** @class */ (function () {
    function Action(name, params) {
        this.name = name;
        this.params = params;
    }
    Action.prototype.getActionInstance = function () {
        var className = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
        try {
            var actionInstance = new Actions[className]();
            return actionInstance;
        }
        catch (error) {
            throw new ConfigurationException_1.ConfigurationException("Action \"" + this.name + "\" not supported.");
        }
    };
    ;
    Action.prototype.toJson = function () {
        throw new Error("Method not implemented.");
    };
    return Action;
}());
exports.Action = Action;
