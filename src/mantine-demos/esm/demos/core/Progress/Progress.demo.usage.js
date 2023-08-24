import React from 'react';
import { Progress } from '@mantine/core';

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
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(Progress, __spreadValues({}, props));
}
const usage = {
  type: "configurator",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    {
      prop: "value",
      type: "number",
      initialValue: 50,
      max: 100,
      min: 0,
      step: 10,
      libraryValue: "__"
    },
    { prop: "striped", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "animated", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { usage };
//# sourceMappingURL=Progress.demo.usage.js.map
