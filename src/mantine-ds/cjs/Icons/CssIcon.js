'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
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
function CssIcon(_a) {
  var _b = _a, { size, style } = _b, others = __objRest(_b, ["size", "style"]);
  return /* @__PURE__ */ React__default.createElement(
    "svg",
    __spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      style: __spreadValues({ width: core.rem(size), height: core.rem(size) }, style)
    }, others),
    /* @__PURE__ */ React__default.createElement("path", { fill: "#0277BD", d: "M41 5H7l3 34 14 4 14-4 3-34z" }),
    /* @__PURE__ */ React__default.createElement("path", { fill: "#039BE5", d: "M24 8v31.9l11.2-3.2L37.7 8z" }),
    /* @__PURE__ */ React__default.createElement("path", { fill: "#FFF", d: "M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" }),
    /* @__PURE__ */ React__default.createElement(
      "path",
      {
        fill: "#EEE",
        d: "M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      }
    )
  );
}

exports.CssIcon = CssIcon;
//# sourceMappingURL=CssIcon.js.map
