'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var inputControls = require('../../../shared/input-controls.js');

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
import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
      label="PillsInput"
      {{props}}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.PillsInput, __spreadValues({ label: "PillsInput" }, props), /* @__PURE__ */ React__default.createElement(core.Pill.Group, null, /* @__PURE__ */ React__default.createElement(core.Pill, null, "React"), /* @__PURE__ */ React__default.createElement(core.Pill, null, "Vue"), /* @__PURE__ */ React__default.createElement(core.Pill, null, "Svelte"), /* @__PURE__ */ React__default.createElement(core.PillsInput.Field, { placeholder: "Enter tags" })));
}
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputControls.inputControls
};

exports.configurator = configurator;
//# sourceMappingURL=PillsInput.demo.configurator.js.map
