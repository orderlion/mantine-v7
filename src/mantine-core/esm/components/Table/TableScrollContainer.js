import React from 'react';
import classes from './Table.module.css.js';
import { ScrollArea } from '../ScrollArea/ScrollArea.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { rem } from '../../core/utils/units-converters/rem.js';

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
  type: "scrollarea"
};
const varsResolver = createVarsResolver((_, { minWidth, type }) => ({
  scrollContainer: {
    "--table-min-width": rem(minWidth),
    "--table-overflow": type === "native" ? "auto" : void 0
  }
}));
const TableScrollContainer = factory((_props, ref) => {
  const props = useProps("TableScrollContainer", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    minWidth,
    type
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "minWidth",
    "type"
  ]);
  const getStyles = useStyles({
    name: "TableScrollContainer",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "scrollContainer"
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({
      component: type === "scrollarea" ? ScrollArea : "div"
    }, type === "scrollarea" ? { offsetScrollbars: "x" } : {}), {
      ref
    }), getStyles("scrollContainer")), others),
    /* @__PURE__ */ React.createElement("div", __spreadValues({}, getStyles("scrollContainerInner")), children)
  );
});
TableScrollContainer.classes = classes;
TableScrollContainer.displayName = "@mantine/core/TableScrollContainer";

export { TableScrollContainer };
//# sourceMappingURL=TableScrollContainer.js.map
