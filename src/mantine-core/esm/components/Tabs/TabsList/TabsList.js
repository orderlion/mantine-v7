import React from 'react';
import { useTabsContext } from '../Tabs.context.js';
import classes from '../Tabs.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { Box } from '../../../core/Box/Box.js';

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
const defaultProps = {};
const TabsList = factory((_props, ref) => {
  const props = useProps("TabsList", defaultProps, _props);
  const _a = props, { children, className, grow, justify, classNames, styles, style } = _a, others = __objRest(_a, ["children", "className", "grow", "justify", "classNames", "styles", "style"]);
  const ctx = useTabsContext();
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("list", {
      className,
      style,
      classNames,
      styles,
      props,
      variant: ctx.variant
    })), {
      ref,
      role: "tablist",
      variant: ctx.variant,
      mod: {
        grow,
        orientation: ctx.orientation,
        placement: ctx.orientation === "vertical" && ctx.placement,
        inverted: ctx.inverted
      },
      "aria-orientation": ctx.orientation,
      __vars: { "--tabs-justify": justify }
    }),
    children
  );
});
TabsList.classes = classes;
TabsList.displayName = "@mantine/core/TabsList";

export { TabsList };
//# sourceMappingURL=TabsList.js.map
