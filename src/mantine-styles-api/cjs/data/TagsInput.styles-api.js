'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Input_stylesApi = require('./Input.styles-api.js');
var Combobox_stylesApi = require('./Combobox.styles-api.js');

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
const TagsInputStylesApi = {
  selectors: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, Input_stylesApi.InputStylesApi.selectors), Input_stylesApi.InputWrapperStylesApi.selectors), Combobox_stylesApi.ComboboxLikeSelectors), {
    pill: "Value pill",
    inputField: "Input field",
    pillsList: "List of pills, also contains input field"
  }),
  vars: {}
};

exports.TagsInputStylesApi = TagsInputStylesApi;
//# sourceMappingURL=TagsInput.styles-api.js.map
