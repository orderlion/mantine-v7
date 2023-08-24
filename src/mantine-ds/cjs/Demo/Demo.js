'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CodeDemo = require('../CodeDemo/CodeDemo.js');
var ConfiguratorDemo = require('../ConfiguratorDemo/ConfiguratorDemo.js');
var StylesApiDemo = require('../StylesApiDemo/StylesApiDemo.js');

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
function Demo({ data }) {
  const { component: Component } = data;
  switch (data.type) {
    case "code":
      return /* @__PURE__ */ React__default.createElement(CodeDemo.CodeDemo, __spreadValues({}, data), /* @__PURE__ */ React__default.createElement(Component, null));
    case "configurator":
      return /* @__PURE__ */ React__default.createElement(ConfiguratorDemo.ConfiguratorDemo, __spreadValues({}, data), /* @__PURE__ */ React__default.createElement(Component, null));
    case "styles-api":
      return /* @__PURE__ */ React__default.createElement(StylesApiDemo.StylesApiDemo, __spreadValues({}, data), /* @__PURE__ */ React__default.createElement(Component, null));
    default:
      return null;
  }
}

exports.Demo = Demo;
//# sourceMappingURL=Demo.js.map
