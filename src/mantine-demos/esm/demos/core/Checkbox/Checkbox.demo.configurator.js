import React from 'react';
import { Checkbox } from '@mantine/core';

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
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: (props) => /* @__PURE__ */ React.createElement(Checkbox, __spreadProps(__spreadValues({}, props), { defaultChecked: true })),
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
    { prop: "label", type: "string", initialValue: "I agree to sell my privacy", libraryValue: "" },
    { prop: "description", type: "string", initialValue: "", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "disabled", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "indeterminate", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Checkbox.demo.configurator.js.map
