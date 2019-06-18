"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const billy_core_1 = require("@fivethree/billy-core");
exports.platformValidator = {
    validate: (param) => ['android', 'ios', 'electron'].some(p => param === p),
    invalidText: (n, param) => `Wrong parameter for ${n}. Valid options [android, ios, electron].`
};
exports.appIDValidator = {
    validate: (param) => /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i.test(param),
    invalidText: (n, param) => `Incorrect app id ${param}. Please specify another app id. Example: com.company.app.`
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
exports.name = {
    name: 'name',
    description: 'What\'s the name of the app?',
    validators: [billy_core_1.isString],
    optional: false
};
exports.appID = {
    name: 'app-id',
    description: 'What\'s your app\'s id? [com.company.app]',
    validators: [exports.appIDValidator],
    optional: false
};
