import React from 'react';
import { getCurveProps } from './get-curve-props.js';
import { Tooltip } from '../../Tooltip/Tooltip.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { Box } from '../../../core/Box/Box.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Curve(_a) {
  var _b = _a, {
    size,
    value,
    offset,
    sum,
    thickness,
    root,
    color,
    lineRoundCaps,
    tooltip,
    getStyles,
    display
  } = _b, others = __objRest(_b, [
    "size",
    "value",
    "offset",
    "sum",
    "thickness",
    "root",
    "color",
    "lineRoundCaps",
    "tooltip",
    "getStyles",
    "display"
  ]);
  const theme = useMantineTheme();
  return /* @__PURE__ */ React.createElement(Tooltip.Floating, { disabled: !tooltip, label: tooltip }, /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues(__spreadValues({
      component: "circle"
    }, others), getStyles("curve")), {
      __vars: { "--curve-color": color ? getThemeColor(color, theme) : void 0 },
      fill: "none",
      strokeLinecap: lineRoundCaps ? "round" : "butt"
    }), getCurveProps({ sum, size, thickness, value, offset, root }))
  ));
}
Curve.displayName = "@mantine/core/Curve";

export { Curve };
//# sourceMappingURL=Curve.js.map
