import { InputWrapperStylesApi, InputStylesApi } from './Input.styles-api.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const PasswordInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), {
    innerInput: "Actual input element",
    visibilityToggle: "Visibility toggle button"
  }),
  vars: {
    root: {
      "--psi-button-size": "Controls visibility toggle button `width` and `height`",
      "--psi-icon-size": "Controls visibility toggle icon `width` and `height`"
    }
  }
};

export { PasswordInputStylesApi };
//# sourceMappingURL=PasswordInput.styles-api.js.map
