import dayjs from 'dayjs';
import React, { useRef } from 'react';
import { factory, useProps } from '@mantine/core';
import { MonthLevel } from '../MonthLevel/MonthLevel.js';
import { handleControlKeyDown } from '../../utils/handle-control-key-down.js';
import { LevelsGroup } from '../LevelsGroup/LevelsGroup.js';

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
  numberOfColumns: 1
};
const MonthLevelGroup = factory((_props, ref) => {
  const props = useProps("MonthLevelGroup", defaultProps, _props);
  const _a = props, {
    month: month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __onDayClick,
    __onDayMouseEnter,
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
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars
  } = _a, others = __objRest(_a, [
    // Month settings
    "month",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "__onDayClick",
    "__onDayMouseEnter",
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
    "numberOfColumns",
    "levelControlAriaLabel",
    "monthLabelFormat",
    "__staticSelector",
    "__stopPropagation",
    "size",
    "static",
    "vars"
  ]);
  const daysRefs = useRef([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = dayjs(month).add(monthIndex, "months").toDate();
    return /* @__PURE__ */ React.createElement(
      MonthLevel,
      {
        key: monthIndex,
        month: currentMonth,
        withNext: monthIndex === numberOfColumns - 1,
        withPrevious: monthIndex === 0,
        monthLabelFormat,
        __stopPropagation,
        __onDayClick,
        __onDayMouseEnter,
        __onDayKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: monthIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef: daysRefs
        }),
        __getDayRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(daysRefs.current[monthIndex])) {
            daysRefs.current[monthIndex] = [];
          }
          if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
            daysRefs.current[monthIndex][rowIndex] = [];
          }
          daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
        locale,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        minDate,
        maxDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
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
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "MonthLevelGroup",
        size,
        static: isStatic,
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ React.createElement(
    LevelsGroup,
    __spreadValues({
      classNames,
      styles,
      __staticSelector: __staticSelector || "MonthLevelGroup",
      ref,
      size
    }, others),
    months
  );
});
MonthLevelGroup.classes = __spreadValues(__spreadValues({}, LevelsGroup.classes), MonthLevel.classes);
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

export { MonthLevelGroup };
//# sourceMappingURL=MonthLevelGroup.js.map
