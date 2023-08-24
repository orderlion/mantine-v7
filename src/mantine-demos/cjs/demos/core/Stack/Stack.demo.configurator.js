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
  return /* @__PURE__ */ React__default.createElement(core.Stack, __spreadValues({ h: 300, bg: "var(--mantine-color-blue-light)" }, props), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "1"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "2"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "3"));
}
const code = `
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-blue-light)"
      {{props}}
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "align",
      type: "select",
      data: [
        { label: "stretch", value: "stretch" },
        { label: "center", value: "center" },
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" }
      ],
      initialValue: "stretch",
      libraryValue: "stretch"
    },
    {
      prop: "justify",
      type: "select",
      data: [
        { label: "center", value: "center" },
        { label: "flex-start", value: "flex-start" },
        { label: "flex-end", value: "flex-end" },
        { label: "space-between", value: "space-between" },
        { label: "space-around", value: "space-around" }
      ],
      initialValue: "center",
      libraryValue: "center"
    },
    { prop: "gap", type: "size", initialValue: "md", libraryValue: "md" }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Stack.demo.configurator.js.map
