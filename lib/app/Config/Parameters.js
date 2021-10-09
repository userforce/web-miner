"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
var selectorValidationRegex = /^([a-zA-Z]|\.|\#)/i;
var Parameters = /** @class */ (function () {
    function Parameters(value, selector) {
        if (value === void 0) { value = ''; }
        if (selector === void 0) { selector = ''; }
        this.value = value;
        this.selector = selector;
    }
    Parameters.prototype.toJson = function () {
        throw new Error("Method not implemented.");
    };
    return Parameters;
}());
exports.Parameters = Parameters;
