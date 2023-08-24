import React from 'react';
import { Box, Notification } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(Notification, __spreadValues({ onClose: () => {
  } }, props)));
}
const code = `
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  centered: true,
  code,
  dimmed: true,
  controls: [
    { prop: "loading", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "withCloseButton", type: "boolean", initialValue: true, libraryValue: true },
    { prop: "withBorder", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    {
      prop: "title",
      type: "string",
      initialValue: "We notify you that",
      libraryValue: ""
    },
    {
      prop: "children",
      type: "string",
      initialValue: "You are now obligated to give a star to Mantine project on GitHub",
      libraryValue: ""
    }
  ]
};

export { configurator };
//# sourceMappingURL=Notification.demo.configurator.js.map
