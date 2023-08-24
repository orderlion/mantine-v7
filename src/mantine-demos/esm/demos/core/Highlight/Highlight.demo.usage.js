import React from 'react';
import { Highlight } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Highlight, __spreadValues({ maw: 400, mx: "auto" }, props));
}
const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`;
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    { prop: "highlightColor", type: "color", initialValue: "yellow", libraryValue: "yellow" },
    { prop: "highlight", type: "string", initialValue: "this", libraryValue: null },
    {
      prop: "children",
      type: "string",
      initialValue: "Highlight This, definitely THIS and also this!",
      libraryValue: null
    }
  ]
};

export { usage };
//# sourceMappingURL=Highlight.demo.usage.js.map
