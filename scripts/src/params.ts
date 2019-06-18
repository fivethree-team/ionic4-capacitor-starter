import { ParamOptions, isString, Validator, isBoolean } from '@fivethree/billy-core';

export const platformValidator: Validator = {
    validate: (param) => ['android', 'ios', 'electron'].some(p => param === p),
    invalidText: (n, param) => `Wrong parameter for ${n}. Valid options [android, ios, electron].`
};

export const appIDValidator: Validator = {
    validate: (param) => /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i.test(param),
    invalidText: (n, param) => `Incorrect app id ${param}. Please specify another app id. Example: com.company.app.`
};

export const platform: ParamOptions = {
    name: 'platform',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [isString, platformValidator]
};

export const headless: ParamOptions = {
    name: 'headless',
    description: 'Run chrome instance in headless mode [defaults to true]',
    validators: [isBoolean],
    optional: true
};

export const prod: ParamOptions = {
    name: 'prod',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [isBoolean],
    optional: true
};

export const name: ParamOptions = {
    name: 'name',
    description: 'What\'s the name of the app?',
    validators: [isString],
    optional: false
};

export const appID: ParamOptions = {
    name: 'app-id',
    description: 'What\'s your app\'s id? [com.company.app]',
    validators: [appIDValidator],
    optional: false
};
