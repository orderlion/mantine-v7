'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

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
const code = `
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote{{props}} cite="\u2013 Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install \u2013 you never know what you are going to get.
    </Blockquote>
  );
}
`;
function Wrapper(props) {
  const icon = /* @__PURE__ */ React__default.createElement(iconsReact.IconInfoCircle, null);
  return /* @__PURE__ */ React__default.createElement(core.Blockquote, __spreadValues({ cite: "\u2013 Forrest Gump", icon, mt: "xl" }, props), "Life is like an npm install \u2013 you never know what you are going to get.");
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 380,
  controls: [
    { type: "color", prop: "color", initialValue: "blue", libraryValue: null },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" },
    {
      type: "number",
      prop: "iconSize",
      initialValue: 48,
      min: 30,
      max: 60,
      step: 1,
      libraryValue: 48
    }
  ]
};

exports.usage = usage;
//# sourceMappingURL=Blockquote.demo.usage.js.map
