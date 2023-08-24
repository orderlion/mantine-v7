import React from 'react';
import { Box, ScrollArea } from '@mantine/core';
import { Content } from './_content.js';

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
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(ScrollArea, __spreadValues({ h: 250 }, props), /* @__PURE__ */ React.createElement(Content, null)));
}
const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`;
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "type",
      type: "select",
      data: [
        { value: "hover", label: "Hover" },
        { value: "auto", label: "Auto" },
        { value: "always", label: "Always" },
        { value: "scroll", label: "Scroll" },
        { value: "never", label: "Never" }
      ],
      initialValue: "hover",
      libraryValue: "hover"
    },
    {
      prop: "offsetScrollbars",
      type: "boolean",
      libraryValue: false,
      initialValue: false
    },
    {
      prop: "scrollbarSize",
      type: "number",
      min: 2,
      max: 20,
      step: 2,
      libraryValue: 10,
      initialValue: 10
    },
    {
      prop: "scrollHideDelay",
      type: "number",
      min: 0,
      max: 6e3,
      step: 500,
      libraryValue: 1e3,
      initialValue: 1e3
    }
  ]
};

export { usage };
//# sourceMappingURL=ScrollArea.demo.usage.js.map
