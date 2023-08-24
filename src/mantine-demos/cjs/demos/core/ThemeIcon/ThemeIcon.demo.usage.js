'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React__default.createElement(core.ThemeIcon, __spreadValues({}, props), /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { style: { width: "70%", height: "70%" } })));
}
const code = `
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`;
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  striped: true,
  controls: [
    {
      prop: "variant",
      type: "select",
      initialValue: "filled",
      libraryValue: "filled",
      data: [
        { label: "filled", value: "filled" },
        { label: "light", value: "light" },
        { label: "outline", value: "outline" },
        { label: "default", value: "default" },
        { label: "white", value: "white" }
      ]
    },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" }
  ]
};

exports.usage = usage;
//# sourceMappingURL=ThemeIcon.demo.usage.js.map
