'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var YearLevel = require('../YearLevel/YearLevel.js');
var handleControlKeyDown = require('../../utils/handle-control-key-down.js');
var LevelsGroup = require('../LevelsGroup/LevelsGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  numberOfColumns: 1,
  size: "sm"
};
const YearLevelGroup = core.factory((_props, ref) => {
  const props = core.useProps("YearLevelGroup", defaultProps, _props);
  const _a = props, {
    year: year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
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
    classNames: classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size,
    vars
  } = _a, others = __objRest(_a, [
    // YearLevel settings
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
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
    // Other settings
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "numberOfColumns",
    "levelControlAriaLabel",
    "yearLabelFormat",
    "size",
    "vars"
  ]);
  const controlsRef = React.useRef([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = dayjs__default(year).add(yearIndex, "years").toDate();
    return /* @__PURE__ */ React__default.createElement(
      YearLevel.YearLevel,
      {
        key: yearIndex,
        size,
        monthsListFormat,
        year: currentYear,
        withNext: yearIndex === numberOfColumns - 1,
        withPrevious: yearIndex === 0,
        yearLabelFormat,
        __stopPropagation,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown.handleControlKeyDown({
          levelIndex: yearIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[yearIndex])) {
            controlsRef.current[yearIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
            controlsRef.current[yearIndex][rowIndex] = [];
          }
          controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
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
        getMonthControlProps,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "YearLevelGroup",
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ React__default.createElement(
    LevelsGroup.LevelsGroup,
    __spreadValues({
      classNames,
      styles,
      __staticSelector: __staticSelector || "YearLevelGroup",
      ref,
      size
    }, others),
    years
  );
});
YearLevelGroup.classes = __spreadValues(__spreadValues({}, YearLevel.YearLevel.classes), LevelsGroup.LevelsGroup.classes);
YearLevelGroup.displayName = "@mantine/dates/YearLevelGroup";

exports.YearLevelGroup = YearLevelGroup;
//# sourceMappingURL=YearLevelGroup.js.map
