'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cssVariablesObjectToString = require('./css-variables-object-to-string.js');
var wrapWithSelector = require('./wrap-with-selector.js');

function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString.cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector.wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString.cssVariablesObjectToString(input.dark);
  const darkForced = dark ? wrapWithSelector.wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const light = cssVariablesObjectToString.cssVariablesObjectToString(input.light);
  const lightForced = light ? wrapWithSelector.wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

exports.convertCssVariables = convertCssVariables;
//# sourceMappingURL=convert-css-variables.js.map
