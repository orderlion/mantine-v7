'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _base = require('./_base.js');

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
const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`;
function Demo(props) {
  const items = _base.groceries.map((item) => /* @__PURE__ */ React__default.createElement(core.Accordion.Item, { key: item.value, value: item.value }, /* @__PURE__ */ React__default.createElement(core.Accordion.Control, { icon: item.emoji }, item.value), /* @__PURE__ */ React__default.createElement(core.Accordion.Panel, null, item.description)));
  return /* @__PURE__ */ React__default.createElement(core.Accordion, __spreadProps(__spreadValues({}, props), { defaultValue: "Apples" }), items);
}
const configurator = {
  type: "configurator",
  component: Demo,
  code,
  controls: [
    {
      prop: "variant",
      type: "select",
      initialValue: "default",
      libraryValue: "default",
      data: [
        { label: "Default", value: "default" },
        { label: "Contained", value: "contained" },
        { label: "Filled", value: "filled" },
        { label: "Separated", value: "separated" }
      ]
    },
    { prop: "radius", type: "size", libraryValue: "sm", initialValue: "sm" },
    {
      prop: "chevronPosition",
      type: "segmented",
      data: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ],
      initialValue: "right",
      libraryValue: "right"
    },
    { prop: "disableChevronRotation", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Accordion.demo.configurator.js.map
