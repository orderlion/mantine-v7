import React from 'react';
import classes from './Blockquote.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { parseThemeColor } from '../../core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.js';
import { rgba } from '../../core/MantineProvider/color-functions/rgba/rgba.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';
import { rem } from '../../core/utils/units-converters/rem.js';
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
  iconSize: 48
};
const varsResolver = createVarsResolver((theme, { color, iconSize, radius }) => {
  const darkParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "dark"
  });
  const lightParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "light"
  });
  return {
    root: {
      "--bq-bg-light": rgba(lightParsed.value, 0.07),
      "--bq-bg-dark": rgba(darkParsed.value, 0.06),
      "--bq-bd": getThemeColor(color, theme),
      "--bq-icon-size": rem(iconSize),
      "--bq-radius": getRadius(radius)
    }
  };
});
const Blockquote = factory((_props, ref) => {
  const props = useProps("Blockquote", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    icon,
    iconSize,
    cite
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "icon",
    "iconSize",
    "cite"
  ]);
  const getStyles = useStyles({
    name: "Blockquote",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ component: "blockquote", ref }, getStyles("root")), others), icon && /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("icon")), icon), children, cite && /* @__PURE__ */ React.createElement("cite", __spreadValues({}, getStyles("cite")), cite));
});
Blockquote.classes = classes;
Blockquote.displayName = "@mantine/core/Blockquote";

export { Blockquote };
//# sourceMappingURL=Blockquote.js.map
