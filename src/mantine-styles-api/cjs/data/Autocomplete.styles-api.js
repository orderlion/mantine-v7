'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Input_stylesApi = require('./Input.styles-api.js');
var Combobox_stylesApi = require('./Combobox.styles-api.js');

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
const AutocompleteStylesApi = {
  selectors: __spreadValues(__spreadValues(__spreadValues({}, Input_stylesApi.InputStylesApi.selectors), Input_stylesApi.InputWrapperStylesApi.selectors), Combobox_stylesApi.ComboboxLikeSelectors),
  vars: {}
};

exports.AutocompleteStylesApi = AutocompleteStylesApi;
//# sourceMappingURL=Autocomplete.styles-api.js.map
