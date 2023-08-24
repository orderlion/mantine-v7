'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
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
const code = `
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Fieldset, __spreadValues({ legend: "Personal information" }, props), /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Your name", placeholder: "Your name" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Email", placeholder: "Email", mt: "md" }));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  maxWidth: 500,
  centered: true,
  controls: [
    {
      type: "segmented",
      prop: "variant",
      initialValue: "default",
      libraryValue: "default",
      data: ["default", "filled", "unstyled"]
    },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" }
  ]
};

exports.usage = usage;
//# sourceMappingURL=Fieldset.demo.usage.js.map
