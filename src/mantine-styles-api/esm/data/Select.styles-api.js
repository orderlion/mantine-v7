import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api.js';
import { ComboboxLikeSelectors } from './Combobox.styles-api.js';

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
const SelectStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, InputStylesApi.selectors), InputWrapperStylesApi.selectors), ComboboxLikeSelectors),
  vars: {}
};

export { SelectStylesApi };
//# sourceMappingURL=Select.styles-api.js.map
