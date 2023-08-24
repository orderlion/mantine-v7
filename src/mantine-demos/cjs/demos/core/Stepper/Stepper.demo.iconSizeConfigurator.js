'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Stepper, __spreadProps(__spreadValues({}, props), { active: 1 }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 1", description: "Create an account" }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Step 2", description: "Verify email" }));
}
const code = `
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`;
const iconSizeConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "iconSize",
      type: "number",
      initialValue: 42,
      libraryValue: "__",
      min: 32,
      max: 62,
      step: 5
    }
  ]
};

exports.iconSizeConfigurator = iconSizeConfigurator;
//# sourceMappingURL=Stepper.demo.iconSizeConfigurator.js.map
