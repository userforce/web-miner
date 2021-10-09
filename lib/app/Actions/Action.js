"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.prototype.execute = function (page, params) {
        throw new Error('Only Action derivates can be executed.');
    };
    return Action;
}());
exports.Action = Action;
