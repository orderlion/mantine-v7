'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Input_stylesApi = require('./Input.styles-api.js');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const CheckboxStylesApi = {
  selectors: {
    root: "Root element",
    input: 'Input element (`input[type="checkbox"]`)',
    icon: "Checkbox icon, used to display checkmark and indeterminate state icon",
    inner: "Wrapper for `icon` and `input`",
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--checkbox-color": "Controls checked checkbox `background-color`",
      "--checkbox-radius": "Controls checkbox `border-radius`",
      "--checkbox-size": "Controls checkbox `width` and `height`"
    }
  },
  modifiers: [
    { modifier: "data-error", selector: "input", condition: "`error` prop is set" },
    { modifier: "data-indeterminate", selector: "input", condition: "`indeterminate` prop is set" },
    { modifier: "data-label-position", selector: "inner", value: "Value of `labelPosition` prop" }
  ]
};
const CheckboxGroupStylesApi = {
  selectors: __spreadValues({}, Input_stylesApi.InputWrapperStylesApi.selectors),
  vars: {}
};

exports.CheckboxGroupStylesApi = CheckboxGroupStylesApi;
exports.CheckboxStylesApi = CheckboxStylesApi;
//# sourceMappingURL=Checkbox.styles-api.js.map
