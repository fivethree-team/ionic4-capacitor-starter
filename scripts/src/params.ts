import { ParamOptions, isString, Validator, isBoolean } from '@fivethree/billy-core';

export const platformValidator: Validator = {
    validate: (param) => ['android', 'ios', 'electron'].some(p => param === p),
    invalidText: (name, param) => `Wrong parameter for ${name}. Valid options [android, ios, electron].`
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
