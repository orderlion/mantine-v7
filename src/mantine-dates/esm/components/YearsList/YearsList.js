import dayjs from 'dayjs';
import React from 'react';
import { factory, useProps, useStyles, Box } from '@mantine/core';
import { getYearsData } from './get-years-data/get-years-data.js';
import { getYearInTabOrder } from './get-year-in-tab-order/get-year-in-tab-order.js';
import { isYearDisabled } from './is-year-disabled/is-year-disabled.js';
import classes from './YearsList.module.css.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';
import { PickerControl } from '../PickerControl/PickerControl.js';

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
  yearsListFormat: "YYYY",
  size: "sm",
  withCellSpacing: true
};
const YearsList = factory((_props, ref) => {
  const props = useProps("YearsList", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    decade,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "decade",
    "yearsListFormat",
    "locale",
    "minDate",
    "maxDate",
    "getYearControlProps",
    "__staticSelector",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size"
  ]);
  const getStyles = useStyles({
    name: __staticSelector || "YearsList",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "yearsList"
  });
  const ctx = useDatesContext();
  const years = getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder(years, minDate, maxDate, getYearControlProps);
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps == null ? void 0 : getYearControlProps(year);
      const isYearInTabOrder = dayjs(year).isSame(yearInTabOrder, "year");
      return /* @__PURE__ */ React.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: cellIndex
        }, getStyles("yearsListCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React.createElement(
          PickerControl,
          __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("yearsListControl")), {
            size,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            disabled: isYearDisabled(year, minDate, maxDate),
            ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node)
          }), controlProps), {
            onKeyDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a2.call(controlProps, event);
              __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: year });
            },
            onClick: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a2.call(controlProps, event);
              __onControlClick == null ? void 0 : __onControlClick(event, year);
            },
            onMouseEnter: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a2.call(controlProps, event);
              __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, year);
            },
            onMouseDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a2.call(controlProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0
          }),
          dayjs(year).locale(ctx.getLocale(locale)).format(yearsListFormat)
        )
      );
    });
    return /* @__PURE__ */ React.createElement("tr", __spreadValues({ key: rowIndex }, getStyles("yearsListRow")), cells);
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ component: "table", ref, size }, getStyles("yearsList")), others), /* @__PURE__ */ React.createElement("tbody", null, rows));
});
YearsList.classes = classes;
YearsList.displayName = "@mantine/dates/YearsList";

export { YearsList };
//# sourceMappingURL=YearsList.js.map
