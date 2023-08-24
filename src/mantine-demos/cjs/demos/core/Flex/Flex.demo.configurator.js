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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Flex, __spreadValues({ mih: 50, bg: "rgba(0, 0, 0, .3)" }, props), /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 1"), /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 2"), /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 3"));
}
const code = `
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      {{props}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "gap", type: "size", initialValue: "md", libraryValue: null },
    {
      prop: "justify",
      type: "select",
      data: [
        { value: "flex-start", label: "flex-start" },
        { value: "center", label: "center" },
        { value: "flex-end", label: "flex-end" }
      ],
      initialValue: "flex-start",
      libraryValue: null
    },
    {
      prop: "align",
      type: "select",
      data: [
        { value: "flex-start", label: "flex-start" },
        { value: "center", label: "center" },
        { value: "flex-end", label: "flex-end" }
      ],
      initialValue: "flex-start",
      libraryValue: null
    },
    {
      prop: "direction",
      type: "select",
      data: [
        { value: "row", label: "row" },
        { value: "column", label: "column" },
        { value: "row-reverse", label: "row-reverse" },
        { value: "column-reverse", label: "column-reverse" }
      ],
      initialValue: "row",
      libraryValue: null
    },
    {
      prop: "wrap",
      type: "select",
      data: [
        { value: "wrap", label: "wrap" },
        { value: "nowrap", label: "nowrap" },
        { value: "wrap-reverse", label: "wrap-reverse" }
      ],
      initialValue: "wrap",
      libraryValue: null
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Flex.demo.configurator.js.map
