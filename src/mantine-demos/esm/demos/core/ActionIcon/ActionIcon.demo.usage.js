import React from 'react';
import { IconAdjustments } from '@tabler/icons-react';
import { rem, ActionIcon } from '@mantine/core';
import { interactiveVariantsControl } from '../../../shared/variants-data.js';

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
  xs: rem(12),
  sm: rem(14),
  md: rem(18),
  lg: rem(26),
  xl: rem(34)
};
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(ActionIcon, __spreadProps(__spreadValues({}, props), { "aria-label": "Settings" }), /* @__PURE__ */ React.createElement(
    IconAdjustments,
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
    interactiveVariantsControl,
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" }
  ]
};

export { usage };
//# sourceMappingURL=ActionIcon.demo.usage.js.map
