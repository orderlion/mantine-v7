import React from 'react';
import cx from 'clsx';
import { useGridContext } from '../Grid.context.js';
import { GridColVariables } from './GridColVariables.js';
import classes from '../Grid.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useRandomClassName } from '../../../core/Box/use-random-classname/use-random-classname.js';
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
const defaultProps = {
  span: 12
};
const GridCol = factory((_props, ref) => {
  const props = useProps("GridCol", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, span, order, offset } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "span", "order", "offset"]);
  const ctx = useGridContext();
  const responsiveClassName = useRandomClassName();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    GridColVariables,
    {
      selector: `.${responsiveClassName}`,
      span,
      order,
      offset
    }
  ), /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("col", {
      className: cx(className, responsiveClassName),
      style,
      classNames,
      styles
    })), others)
  ));
});
GridCol.classes = classes;
GridCol.displayName = "@mantine/core/GridCol";

export { GridCol };
//# sourceMappingURL=GridCol.js.map
