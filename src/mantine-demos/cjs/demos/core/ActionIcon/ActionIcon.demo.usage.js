'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var variantsData = require('../../../shared/variants-data.js');

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
const code = `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments />
    </ActionIcon>
  );
}
`;
const iconSizes = {
  xs: core.rem(12),
  sm: core.rem(14),
  md: core.rem(18),
  lg: core.rem(26),
  xl: core.rem(34)
};
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, __spreadProps(__spreadValues({}, props), { "aria-label": "Settings" }), /* @__PURE__ */ React__default.createElement(
    iconsReact.IconAdjustments,
    {
      style: { width: iconSizes[props.size], height: iconSizes[props.size] },
      stroke: 1.5
    }
  ));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  striped: true,
  controls: [
    variantsData.interactiveVariantsControl,
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" }
  ]
};

exports.usage = usage;
//# sourceMappingURL=ActionIcon.demo.usage.js.map
