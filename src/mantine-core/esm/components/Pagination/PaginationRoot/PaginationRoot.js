import React from 'react';
import { usePagination } from '@mantine/hooks';
import { PaginationProvider } from '../Pagination.context.js';
import classes from '../Pagination.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../../core/Box/Box.js';
import { createVarsResolver } from '../../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getRadius, getSize, getFontSize } from '../../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';
import { createEventHandler } from '../../../core/utils/create-event-handler/create-event-handler.js';

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
  siblings: 1,
  boundaries: 1,
  size: "md"
};
const varsResolver = createVarsResolver(
  (theme, { size, radius, color }) => ({
    root: {
      "--pagination-control-radius": getRadius(radius),
      "--pagination-control-size": getSize(size, "pagination-control-size"),
      "--pagination-control-fz": getFontSize(size),
      "--pagination-active-bg": getThemeColor(color, theme)
    }
  })
);
const PaginationRoot = factory((_props, ref) => {
  const props = useProps("PaginationRoot", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "total",
    "value",
    "defaultValue",
    "onChange",
    "disabled",
    "siblings",
    "boundaries",
    "color",
    "radius",
    "onNextPage",
    "onPreviousPage",
    "onFirstPage",
    "onLastPage",
    "getItemProps"
  ]);
  const getStyles = useStyles({
    name: "Pagination",
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
  const { range, setPage, next, previous, active, first, last } = usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries
  });
  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);
  return /* @__PURE__ */ React.createElement(
    PaginationProvider,
    {
      value: {
        total,
        range,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles
      }
    },
    /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others))
  );
});
PaginationRoot.classes = classes;
PaginationRoot.displayName = "@mantine/core/PaginationRoot";

export { PaginationRoot };
//# sourceMappingURL=PaginationRoot.js.map
