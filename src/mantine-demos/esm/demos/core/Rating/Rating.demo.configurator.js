import React from 'react';
import { Rating } from '@mantine/core';

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
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Rating, __spreadValues({ defaultValue: 2 }, props));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: "color", type: "color", initialValue: "yellow", libraryValue: "yellow" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "count", type: "number", initialValue: 5, libraryValue: 5, min: 1, max: 15 },
    { prop: "highlightSelectedOnly", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Rating.demo.configurator.js.map
