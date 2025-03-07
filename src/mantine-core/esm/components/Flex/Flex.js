import React from 'react';
import { FLEX_STYLE_PROPS_DATA } from './flex-props.js';
import classes from './Flex.module.css.js';
import { useRandomClassName } from '../../core/Box/use-random-classname/use-random-classname.js';
import { parseStyleProps } from '../../core/Box/style-props/parse-style-props/parse-style-props.js';
import { InlineStyles } from '../../core/InlineStyles/InlineStyles.js';
import { filterProps } from '../../core/utils/filter-props/filter-props.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useMantineTheme } from '../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { Box } from '../../core/Box/Box.js';

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
const Flex = factory((_props, ref) => {
  const props = useProps("Flex", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "gap",
    "rowGap",
    "columnGap",
    "align",
    "justify",
    "wrap",
    "direction"
  ]);
  const getStyles = useStyles({
    name: "Flex",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = useMantineTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ React.createElement(
    InlineStyles,
    {
      selector: `.${responsiveClassName}`,
      styles: parsedStyleProps.styles,
      media: parsedStyleProps.media
    }
  ), /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, getStyles("root", {
      className: responsiveClassName,
      style: filterProps(parsedStyleProps.inlineStyles)
    })), others)
  ));
});
Flex.classes = classes;
Flex.displayName = "@mantine/core/Flex";

export { Flex };
//# sourceMappingURL=Flex.js.map
