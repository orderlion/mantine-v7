import React from 'react';
import { Tooltip, Button } from '@mantine/core';

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
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Tooltip, __spreadValues({ label: "Tooltip", withArrow: true, opened: true, position: "top-start" }, props), /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button with tooltip"));
}
const arrow = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "segmented",
      prop: "arrowPosition",
      initialValue: "center",
      libraryValue: "center",
      data: ["center", "side"]
    },
    {
      type: "number",
      prop: "arrowOffset",
      initialValue: 10,
      libraryValue: null,
      min: 5,
      max: 50
    },
    {
      type: "number",
      prop: "arrowSize",
      initialValue: 4,
      libraryValue: null,
      min: 2,
      max: 8
    },
    {
      type: "number",
      prop: "arrowRadius",
      initialValue: 0,
      libraryValue: 0,
      min: 0,
      max: 10
    }
  ]
};

export { arrow };
//# sourceMappingURL=Tooltip.demo.arrow.js.map
