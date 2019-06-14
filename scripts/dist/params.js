"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const billy_core_1 = require("@fivethree/billy-core");
exports.platformValidator = {
    validate: (param) => ['android', 'ios', 'electron'].some(p => param === p),
    invalidText: (name, param) => `Wrong parameter for ${name}. Valid options [android, ios, electron].`
};
exports.platform = {
    name: 'platform',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [billy_core_1.isString, exports.platformValidator]
};
exports.headless = {
    name: 'headless',
    description: 'Run chrome instance in headless mode [defaults to true]',
    validators: [billy_core_1.isBoolean],
    optional: true
};
exports.prod = {
    name: 'prod',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [billy_core_1.isBoolean],
    optional: true
};
