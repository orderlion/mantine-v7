import React, { useState, useEffect } from 'react';
import { AvatarGroup } from './AvatarGroup/AvatarGroup.js';
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context.js';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon.js';
import classes from './Avatar.module.css.js';
import { polymorphicFactory } from '../../core/factory/polymorphic-factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize, getRadius } from '../../core/utils/get-size/get-size.js';

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
  size: "md",
  radius: "100%",
  color: "gray",
  variant: "light"
};
const varsResolver = createVarsResolver(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--avatar-size": getSize(size, "avatar-size"),
        "--avatar-radius": getRadius(radius),
        "--avatar-bg": colors.background,
        "--avatar-color": colors.color,
        "--avatar-bd": colors.border
      }
    };
  }
);
const Avatar = polymorphicFactory((_props, ref) => {
  const props = useProps("Avatar", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "src",
    "alt",
    "radius",
    "color",
    "gradient",
    "imageProps",
    "children"
  ]);
  const ctx = useAvatarGroupContext();
  const [error, setError] = useState(!src);
  const getStyles = useStyles({
    name: "Avatar",
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
  useEffect(() => setError(!src), [src]);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { mod: { "within-group": ctx.withinGroup }, ref }), others), error ? /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({}, getStyles("placeholder")), { title: alt }), children || /* @__PURE__ */ React.createElement(AvatarPlaceholderIcon, null)) : /* @__PURE__ */ React.createElement(
    "img",
    __spreadProps(__spreadValues(__spreadValues({}, imageProps), getStyles("image")), {
      src,
      alt,
      onError: (event) => {
        var _a2;
        setError(true);
        (_a2 = imageProps == null ? void 0 : imageProps.onError) == null ? void 0 : _a2.call(imageProps, event);
      }
    })
  ));
});
Avatar.classes = classes;
Avatar.displayName = "@mantine/core/Avatar";
Avatar.Group = AvatarGroup;

export { Avatar };
//# sourceMappingURL=Avatar.js.map
