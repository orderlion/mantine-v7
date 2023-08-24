import React from 'react';
import { Radio } from '@mantine/core';

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
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Radio.Group, { name: "demo", defaultValue: "react" }, /* @__PURE__ */ React.createElement(Radio, __spreadValues({ value: "react" }, props)));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "labelPosition",
      type: "segmented",
      data: [
        { value: "right", label: "Right" },
        { value: "left", label: "Left" }
      ],
      initialValue: "right",
      libraryValue: "right"
    },
    { prop: "label", type: "string", initialValue: "I cannot be unchecked", libraryValue: "" },
    { prop: "description", type: "string", initialValue: "", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" }
  ]
};

export { configurator };
//# sourceMappingURL=Radio.demo.configurator.js.map
