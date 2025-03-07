import React from 'react';
import { useProgressContext } from '../Progress.context.js';
import classes from '../Progress.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
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
const defaultProps = {
  withAria: true
};
const ProgressSection = factory((props, ref) => {
  const _a = useProps("ProgressSection", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    withAria,
    color,
    striped,
    animated
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "value",
    "withAria",
    "color",
    "striped",
    "animated"
  ]);
  const ctx = useProgressContext();
  const theme = useMantineTheme();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("section", { className, classNames, styles, style })), others), ariaAttributes), {
      mod: { striped: striped || animated, animated },
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": getThemeColor(color, theme)
      }
    })
  );
});
ProgressSection.classes = classes;
ProgressSection.displayName = "@mantine/core/ProgressSection";

export { ProgressSection };
//# sourceMappingURL=ProgressSection.js.map
