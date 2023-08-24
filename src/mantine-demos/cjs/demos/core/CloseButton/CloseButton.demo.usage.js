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
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton{{props}} />;
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.CloseButton, __spreadValues({}, props));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ prop: "size", type: "size", initialValue: "md", libraryValue: "md" }]
};

exports.usage = usage;
//# sourceMappingURL=CloseButton.demo.usage.js.map
