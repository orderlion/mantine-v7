'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function isGroup(input) {
  return "group" in input;
}
function NativeSelectOption({ data }) {
  if (isGroup(data)) {
    const items = data.items.map((item) => /* @__PURE__ */ React__default.createElement(NativeSelectOption, { key: item.value, data: item }));
    return /* @__PURE__ */ React__default.createElement("optgroup", { label: data.group }, items);
  }
  const _a = data, others = __objRest(_a, ["value", "label"]);
  return /* @__PURE__ */ React__default.createElement("option", __spreadValues({ key: data.value, value: data.value }, others), data.label);
}
NativeSelectOption.displayName = "@mantine/core/NativeSelectOption";

exports.NativeSelectOption = NativeSelectOption;
//# sourceMappingURL=NativeSelectOption.js.map
