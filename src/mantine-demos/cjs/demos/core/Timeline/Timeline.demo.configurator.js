'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 320, mx: "auto" }, /* @__PURE__ */ React__default.createElement(_base.TimelineBase, __spreadValues({ noIcon: true }, props)));
}
const code = `
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "radius", type: "size", initialValue: "xl", libraryValue: "xl" },
    { prop: "active", type: "number", initialValue: 1, libraryValue: null, min: -1, max: 3 },
    { prop: "reverseActive", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "lineWidth", type: "number", initialValue: 4, libraryValue: 4, min: 1, max: 8 },
    {
      prop: "bulletSize",
      type: "number",
      initialValue: 20,
      libraryValue: 20,
      min: 12,
      max: 30,
      step: 2
    },
    {
      prop: "align",
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "left",
      libraryValue: "left"
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Timeline.demo.configurator.js.map
