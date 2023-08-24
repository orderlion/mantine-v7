'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _colWrapper = require('./_col-wrapper.js');

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
  return /* @__PURE__ */ React__default.createElement(core.Grid, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "1"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "2"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "3"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "4"), /* @__PURE__ */ React__default.createElement(_colWrapper.ColWrapper, { span: 4 }, "5"));
}
const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
`;
const growConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "grow",
      type: "boolean",
      initialValue: true,
      libraryValue: false
    },
    {
      prop: "gutter",
      type: "size",
      initialValue: "md",
      libraryValue: "md"
    }
  ]
};

exports.growConfigurator = growConfigurator;
//# sourceMappingURL=Grid.demo.growConfigurator.js.map
