import React from 'react';
import { Box, Paper, Text } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Box, { p: "md" }, /* @__PURE__ */ React.createElement(Paper, __spreadValues({ maw: 400, mx: "auto", p: "xl" }, props), /* @__PURE__ */ React.createElement(Text, null, "Paper is the most basic ui component"), /* @__PURE__ */ React.createElement(Text, null, "Use it to create cards, dropdowns, modals and other components that require background with shadow")));
}
const code = `
import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper{{props}} p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
`;
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  dimmed: true,
  controls: [
    { prop: "shadow", type: "size", initialValue: "xs", libraryValue: "none" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "withBorder", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { usage };
//# sourceMappingURL=Paper.demo.usage.js.map
