'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var variantsData = require('../../../shared/variants-data.js');

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
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Button, __spreadValues({}, props), "Button");
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    variantsData.interactiveVariantsControl,
    { type: "color", prop: "color", initialValue: "blue", libraryValue: "blue" },
    { type: "size", prop: "size", initialValue: "sm", libraryValue: "sm" },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Button.demo.configurator.js.map
