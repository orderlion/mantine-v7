import React from 'react';
import { useCardContext } from '../Card.context.js';
import classes from '../Card.module.css.js';
import { polymorphicFactory } from '../../../core/factory/polymorphic-factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { Box } from '../../../core/Box/Box.js';

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
const CardSection = polymorphicFactory((_props, ref) => {
  const props = useProps("CardSection", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    inheritPadding
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "inheritPadding"
  ]);
  const ctx = useCardContext();
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { "with-border": withBorder, "inherit-padding": inheritPadding }
    }, ctx.getStyles("section", { className, style, styles, classNames })), others)
  );
});
CardSection.classes = classes;
CardSection.displayName = "@mantine/core/CardSection";

export { CardSection };
//# sourceMappingURL=CardSection.js.map
