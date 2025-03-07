'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultCssVariablesResolver = require('./default-css-variables-resolver.js');
var defaultTheme = require('../default-theme.js');
var keys = require('../../utils/keys/keys.js');

const defaultCssVariables = defaultCssVariablesResolver.defaultCssVariablesResolver(defaultTheme.DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys.keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys.keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys.keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

exports.removeDefaultVariables = removeDefaultVariables;
//# sourceMappingURL=remove-default-variables.js.map
