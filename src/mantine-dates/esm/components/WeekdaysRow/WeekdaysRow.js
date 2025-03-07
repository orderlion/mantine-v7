import React from 'react';
import { createVarsResolver, getFontSize, getSpacing, factory, useProps, useStyles, Box } from '@mantine/core';
import { getWeekdayNames } from './get-weekdays-names/get-weekdays-names.js';
import classes from './WeekdaysRow.module.css.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';

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
const varsResolver = createVarsResolver((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize(size),
    "--wr-spacing": getSpacing(size)
  }
}));
const WeekdaysRow = factory((_props, ref) => {
  const props = useProps("WeekdaysRow", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = "th",
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "cellComponent",
    "__staticSelector"
  ]);
  const getStyles = useStyles({
    name: __staticSelector || "WeekdaysRow",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "weekdaysRow"
  });
  const ctx = useDatesContext();
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => /* @__PURE__ */ React.createElement(CellComponent, __spreadValues({ key: index }, getStyles("weekday")), weekday));
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ component: "tr", ref }, getStyles("weekdaysRow")), others), weekdays);
});
WeekdaysRow.classes = classes;
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

export { WeekdaysRow };
//# sourceMappingURL=WeekdaysRow.js.map
