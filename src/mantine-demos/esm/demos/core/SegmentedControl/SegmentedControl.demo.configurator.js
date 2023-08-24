import React from 'react';
import { SegmentedControl } from '@mantine/core';

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
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(SegmentedControl, __spreadValues({ data: ["React", "Angular", "Vue", "Svelte"] }, props));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [{ prop: "color", type: "color", initialValue: "blue", libraryValue: null }]
};

export { configurator };
//# sourceMappingURL=SegmentedControl.demo.configurator.js.map
