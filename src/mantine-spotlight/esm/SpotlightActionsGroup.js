import React from 'react';
import { factory, useProps, Box } from '@mantine/core';
import classes from './Spotlight.module.css.js';
import { useSpotlightContext } from './Spotlight.context.js';

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
const SpotlightActionsGroup = factory((props, ref) => {
  const _a = useProps(
    "SpotlightActionsGroup",
    defaultProps,
    props
  ), { className, style, styles, classNames, label, children } = _a, others = __objRest(_a, ["className", "style", "styles", "classNames", "label", "children"]);
  const ctx = useSpotlightContext();
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsGroup", { className, style, classNames, styles })), {
      ref
    }), others), {
      __vars: { "--spotlight-label": `'${label}'` }
    }),
    children
  );
});
SpotlightActionsGroup.classes = classes;
SpotlightActionsGroup.displayName = "@mantine/core/SpotlightActionsGroup";

export { SpotlightActionsGroup };
//# sourceMappingURL=SpotlightActionsGroup.js.map
