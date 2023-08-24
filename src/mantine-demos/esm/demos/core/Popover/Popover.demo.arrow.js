import React from 'react';
import { Popover, Button, Text } from '@mantine/core';

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
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Popover, __spreadValues({ width: 200, opened: true, position: "bottom-start", withArrow: true }, props), /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Target element")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "xs" }, "Arrow position can be changed for *-start and *-end positions")));
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
      libraryValue: 10,
      min: 5,
      max: 50
    },
    {
      type: "number",
      prop: "arrowSize",
      initialValue: 7,
      libraryValue: 7,
      min: 5,
      max: 12
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
//# sourceMappingURL=Popover.demo.arrow.js.map
