import { ParamOptions, isString, Validator } from '@fivethree/billy-core';

export const platformValidator: Validator = {
    validate: (param) => ['android', 'ios', 'electron'].some(p => param === p),
    invalidText: (name, param) => `Wrong parameter for ${name}. Valid options [android, ios, electron].`
};

export const isBoolean: Validator = {
    validate: (param) => ['true', 'false', true, false, 'y', 'n'].some(p => param === p),
    invalidText: (name, param) => `Parameter ${name} should either be true or false.`
};

export const platform: ParamOptions = {
    name: 'platform',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [isString, platformValidator]
};

export const prod: ParamOptions = {
    name: 'prod',
    description: 'Please enter the platform you want to run on. (android, ios or electron)',
    validators: [isBoolean],
    optional: true
};
