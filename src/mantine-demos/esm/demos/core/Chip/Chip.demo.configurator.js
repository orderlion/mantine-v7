import React from 'react';
import { Chip } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Chip, __spreadValues({ defaultChecked: true }, props), "Awesome chip");
}
const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    {
      prop: "variant",
      type: "segmented",
      data: [
        { value: "outline", label: "Outline" },
        { value: "light", label: "Light" },
        { value: "filled", label: "Filled" }
      ],
      initialValue: "outline",
      libraryValue: "outline"
    },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "radius", type: "size", initialValue: "xl", libraryValue: "xl" }
  ]
};

export { configurator };
//# sourceMappingURL=Chip.demo.configurator.js.map
