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
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.SegmentedControl, __spreadValues({ data: ["React", "Angular", "Vue"] }, props));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      libraryValue: "horizontal",
      data: [
        { label: "horizontal", value: "horizontal" },
        { label: "vertical", value: "vertical" }
      ]
    },
    { prop: "fullWidth", type: "boolean", initialValue: false, libraryValue: false },
    { type: "size", prop: "size", initialValue: "sm", libraryValue: "sm" },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" }
  ]
};

exports.usage = usage;
//# sourceMappingURL=SegmentedControl.demo.usage.js.map
