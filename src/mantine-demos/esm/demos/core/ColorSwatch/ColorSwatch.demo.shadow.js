import React from 'react';
import { ColorSwatch } from '@mantine/core';

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
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(ColorSwatch, __spreadValues({ color: "rgba(255, 255, 255, 0.7)" }, props));
}
const shadow = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: "boolean", prop: "withShadow", initialValue: true, libraryValue: true }]
};

export { shadow };
//# sourceMappingURL=ColorSwatch.demo.shadow.js.map
