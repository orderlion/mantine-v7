'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dayjs = require('dayjs');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var MonthsList = require('../MonthsList/MonthsList.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

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
  yearLabelFormat: "YYYY",
  size: "sm"
};
const YearLevel = core.factory((_props, ref) => {
  const props = core.useProps("YearLevel", defaultProps, _props);
  const _a = props, {
    year: year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus: __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    yearLabelFormat: yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    classNames,
    styles,
    unstyled
  } = _a, others = __objRest(_a, [
    // MonthsList settings
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    // CalendarHeader settings
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    // Other props
    "yearLabelFormat",
    "__staticSelector",
    "__stopPropagation",
    "size",
    "classNames",
    "styles",
    "unstyled"
  ]);
  const ctx = useDatesContext.useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs__default(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs__default(year).startOf("year").isAfter(minDate) : false;
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({ "data-year-level": true, size, ref }, others), /* @__PURE__ */ React__default.createElement(
    CalendarHeader.CalendarHeader,
    __spreadValues({
      label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : dayjs__default(year).locale(locale || ctx.locale).format(yearLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious
    }, stylesApiProps)
  ), /* @__PURE__ */ React__default.createElement(
    MonthsList.MonthsList,
    __spreadValues({
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ));
});
YearLevel.classes = __spreadValues(__spreadValues({}, CalendarHeader.CalendarHeader.classes), MonthsList.MonthsList.classes);
YearLevel.displayName = "@mantine/dates/YearLevel";

exports.YearLevel = YearLevel;
//# sourceMappingURL=YearLevel.js.map
