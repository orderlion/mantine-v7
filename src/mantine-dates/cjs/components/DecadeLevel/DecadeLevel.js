'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dayjs = require('dayjs');
var getDecadeRange = require('./get-decade-range/get-decade-range.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var CalendarHeader = require('../CalendarHeader/CalendarHeader.js');
var YearsList = require('../YearsList/YearsList.js');

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
  decadeLabelFormat: "YYYY"
};
const DecadeLevel = core.factory((_props, ref) => {
  const props = core.useProps("DecadeLevel", defaultProps, _props);
  const _a = props, {
    decade: decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
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
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    decadeLabelFormat: decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size
  } = _a, others = __objRest(_a, [
    // YearsList settings
    "decade",
    "locale",
    "minDate",
    "maxDate",
    "yearsListFormat",
    "getYearControlProps",
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
    "nextDisabled",
    "previousDisabled",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    // Other props
    "decadeLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "size"
  ]);
  const ctx = useDatesContext.useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange.getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs__default(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs__default(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => dayjs__default(date).locale(locale || ctx.locale).format(format);
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({ "data-decade-level": true, size, ref }, others), /* @__PURE__ */ React__default.createElement(
    CalendarHeader.CalendarHeader,
    __spreadValues({
      label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(startOfDecade, decadeLabelFormat)} \u2013 ${formatDecade(
        endOfDecade,
        decadeLabelFormat
      )}`,
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel: false,
      levelControlAriaLabel,
      withNext,
      withPrevious
    }, stylesApiProps)
  ), /* @__PURE__ */ React__default.createElement(
    YearsList.YearsList,
    __spreadValues({
      decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
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
DecadeLevel.classes = __spreadValues(__spreadValues({}, YearsList.YearsList.classes), CalendarHeader.CalendarHeader.classes);
DecadeLevel.displayName = "@mantine/dates/DecadeLevel";

exports.DecadeLevel = DecadeLevel;
//# sourceMappingURL=DecadeLevel.js.map
