'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _item = require('./_item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function Demo(props) {
  return /* @__PURE__ */ React__default.createElement(core.SimpleGrid, __spreadProps(__spreadValues({}, props), { id: "grid-configurator" }), _item.defaultItems);
}
const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`;
const usage = {
  type: "configurator",
  component: Demo,
  code,
  controls: [
    { prop: "cols", type: "number", initialValue: 3, min: 1, max: 6, step: 1, libraryValue: "__" },
    { prop: "spacing", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "verticalSpacing", type: "size", initialValue: "md", libraryValue: "md" }
  ]
};

exports.usage = usage;
//# sourceMappingURL=SimpleGrid.demo.usage.js.map
