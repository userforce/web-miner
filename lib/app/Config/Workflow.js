"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
var Action_1 = require("./Action");
var Parameters_1 = require("./Parameters");
var Workflow = /** @class */ (function () {
    function Workflow(actions) {
        if (actions === void 0) { actions = []; }
        this.actions = actions;
    }
    Workflow.fromObject = function (actions) {
        var workflowActions = [];
        for (var index in actions) {
            var _a = actions[index], name_1 = _a.name, params = _a.params;
            var value = params.value, selector = params.selector;
            var parameters = new Parameters_1.Parameters(value, selector);
            workflowActions.push(new Action_1.Action(name_1, parameters));
        }
        return new this(workflowActions);
    };
    Workflow.prototype.toJson = function () {
        throw new Error("Method not implemented.");
    };
    return Workflow;
}());
exports.Workflow = Workflow;
