'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

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
const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput{{props}} />
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.PinInput, __spreadValues({}, props));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "length", type: "number", initialValue: 4, libraryValue: 4, min: 1, max: 10 },
    { prop: "mask", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "placeholder", type: "string", initialValue: "\u25CB", libraryValue: "\u25CB" },
    { prop: "disabled", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "error", type: "boolean", initialValue: false, libraryValue: false },
    {
      prop: "type",
      type: "select",
      initialValue: "alphanumeric",
      libraryValue: "alphanumeric",
      data: ["alphanumeric", "number"]
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=PinInput.demo.configurator.js.map
