import React from 'react';
import classes from './ColorSwatch.module.css.js';
import { rem } from '../../core/utils/units-converters/rem.js';
import { polymorphicFactory } from '../../core/factory/polymorphic-factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getRadius } from '../../core/utils/get-size/get-size.js';

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
const defaultProps = {
  size: rem(28),
  radius: rem(28),
  withShadow: true
};
const varsResolver = createVarsResolver((_, { radius, size }) => ({
  root: {
    "--cs-radius": getRadius(radius),
    "--cs-size": rem(size)
  }
}));
const ColorSwatch = polymorphicFactory((_props, ref) => {
  const props = useProps("ColorSwatch", defaultProps, _props);
  const _a = useProps("ColorSwatch", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    size,
    radius,
    withShadow,
    children,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "size",
    "radius",
    "withShadow",
    "children",
    "variant"
  ]);
  const getStyles = useStyles({
    name: "ColorSwatch",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref,
      variant,
      size
    }, getStyles("root", { focusable: true })), others),
    /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
    withShadow && /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
    /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))),
    /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
  );
});
ColorSwatch.classes = classes;
ColorSwatch.displayName = "@mantine/core/ColorSwatch";

export { ColorSwatch };
//# sourceMappingURL=ColorSwatch.js.map
