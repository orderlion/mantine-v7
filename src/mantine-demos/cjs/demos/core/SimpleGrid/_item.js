'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var _item_module = require('./_item.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
function GridItem(_a) {
  var _b = _a, { className, children } = _b, others = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({ className: cx__default(_item_module['default'].item, className) }, others), /* @__PURE__ */ React__default.createElement(core.Text, { className: _item_module['default'].label }, children));
}
const defaultItems = Array(5).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(GridItem, { key: index }, index + 1));

exports.GridItem = GridItem;
exports.defaultItems = defaultItems;
//# sourceMappingURL=_item.js.map
