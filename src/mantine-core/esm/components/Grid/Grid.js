import React from 'react';
import { GridCol } from './GridCol/GridCol.js';
import { GridProvider } from './Grid.context.js';
import { GridVariables } from './GridVariables.js';
import classes from './Grid.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { useRandomClassName } from '../../core/Box/use-random-classname/use-random-classname.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';

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
  gutter: "md",
  grow: false,
  columns: 12
};
const varsResolver = createVarsResolver((_, { justify, align }) => ({
  root: {
    "--grid-justify": justify,
    "--grid-align": align
  }
}));
const Grid = factory((_props, ref) => {
  const props = useProps("Grid", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "grow",
    "gutter",
    "columns",
    "align",
    "justify",
    "children"
  ]);
  const getStyles = useStyles({
    name: "Grid",
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
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ React.createElement(GridProvider, { value: { getStyles, grow, columns } }, /* @__PURE__ */ React.createElement(GridVariables, __spreadValues({ selector: `.${responsiveClassName}` }, props)), /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root", { className: responsiveClassName })), others), /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("inner")), children)));
});
Grid.classes = classes;
Grid.displayName = "@mantine/core/Grid";
Grid.Col = GridCol;

export { Grid };
//# sourceMappingURL=Grid.js.map
