'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var ModalBase_module = require('./ModalBase.module.css.js');
var Box = require('../../core/Box/Box.js');

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
const ModalBaseHeader = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({ ref, className: cx__default(ModalBase_module['default'].header, className) }, others));
  }
);
ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader";

exports.ModalBaseHeader = ModalBaseHeader;
//# sourceMappingURL=ModalBaseHeader.js.map
