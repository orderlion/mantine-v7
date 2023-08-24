import { InputWrapperStylesApi } from './Input.styles-api.js';

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
const RadioStylesApi = {
  selectors: {
    root: "Root element",
    radio: 'Input element (`input[type="radio"]`)',
    icon: "Radio icon, used to display checked icon",
    inner: "Wrapper for `icon` and `input`",
    body: "Input body, contains all other elements",
    labelWrapper: "Contains `label`, `description` and `error`",
    label: "Label element",
    description: "Description displayed below the label",
    error: "Error message displayed below the label"
  },
  vars: {
    root: {
      "--radio-color": "Controls checked radio `background-color`",
      "--radio-radius": "Controls radio `border-radius`",
      "--radio-size": "Controls radio `width` and `height`"
    }
  },
  modifiers: [
    { modifier: "data-error", selector: "radio", condition: "`error` prop is set" },
    { modifier: "data-label-position", selector: "inner", value: "Value of `labelPosition` prop" }
  ]
};
const RadioGroupStylesApi = {
  selectors: __spreadValues({}, InputWrapperStylesApi.selectors),
  vars: {}
};

export { RadioGroupStylesApi, RadioStylesApi };
//# sourceMappingURL=Radio.styles-api.js.map
