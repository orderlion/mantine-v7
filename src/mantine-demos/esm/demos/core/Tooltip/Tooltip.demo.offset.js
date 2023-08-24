import React from 'react';
import { Tooltip, Button } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared/floating-position-data.js';

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
    <Tooltip label="Tooltip" opened{{props}}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Tooltip, __spreadValues({ label: "Tooltip", opened: true }, props), /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button with tooltip"));
}
const offset = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "select",
      prop: "position",
      initialValue: "top",
      data: FLOATING_POSITION_DATA,
      libraryValue: null
    },
    { type: "number", prop: "offset", initialValue: 5, libraryValue: null, min: -50, max: 50 }
  ]
};

export { offset };
//# sourceMappingURL=Tooltip.demo.offset.js.map
