import dayjs from 'dayjs';
import React from 'react';
import { factory, useProps, useResolvedStylesApi, Box } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { clampLevel } from './clamp-level/clamp-level.js';
import { MonthLevelGroup } from '../MonthLevelGroup/MonthLevelGroup.js';
import { YearLevelGroup } from '../YearLevelGroup/YearLevelGroup.js';
import { DecadeLevelGroup } from '../DecadeLevelGroup/DecadeLevelGroup.js';

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
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true
};
const Calendar = factory((_props, ref) => {
  const props = useProps("Calendar", defaultProps, _props);
  const _a = props, {
    vars,
    maxLevel: maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    firstDayOfWeek: firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    monthsListFormat: monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    yearsListFormat: yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    classNames: classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic
  } = _a, others = __objRest(_a, [
    "vars",
    // CalendarLevel props
    "maxLevel",
    "minLevel",
    "defaultLevel",
    "level",
    "onLevelChange",
    "date",
    "defaultDate",
    "onDateChange",
    "numberOfColumns",
    "columnsToScroll",
    "ariaLabels",
    "onYearSelect",
    "onMonthSelect",
    "onYearMouseEnter",
    "onMonthMouseEnter",
    "__updateDateOnYearSelect",
    "__updateDateOnMonthSelect",
    // MonthLevelGroup props
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "monthLabelFormat",
    "nextIcon",
    "previousIcon",
    "__onDayClick",
    "__onDayMouseEnter",
    "withCellSpacing",
    // YearLevelGroup props
    "monthsListFormat",
    "getMonthControlProps",
    "yearLabelFormat",
    // DecadeLevelGroup props
    "yearsListFormat",
    "getYearControlProps",
    "decadeLabelFormat",
    // Other props
    "classNames",
    "styles",
    "unstyled",
    "minDate",
    "maxDate",
    "locale",
    "__staticSelector",
    "size",
    "__preventFocus",
    "__stopPropagation",
    "onNextDecade",
    "onPreviousDecade",
    "onNextYear",
    "onPreviousYear",
    "onNextMonth",
    "onPreviousMonth",
    "static"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : void 0,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : void 0,
    finalValue: clampLevel(void 0, minLevel, maxLevel),
    onChange: onLevelChange
  });
  const [_date, setDate] = useUncontrolled({
    value: date,
    defaultValue: defaultDate,
    finalValue: null,
    onChange: onDateChange
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Calendar",
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size
  };
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || /* @__PURE__ */ new Date();
  const handleNextMonth = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, "month").toDate();
    onNextMonth == null ? void 0 : onNextMonth(nextDate);
    setDate(nextDate);
  };
  const handlePreviousMonth = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, "month").toDate();
    onPreviousMonth == null ? void 0 : onPreviousMonth(nextDate);
    setDate(nextDate);
  };
  const handleNextYear = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, "year").toDate();
    onNextYear == null ? void 0 : onNextYear(nextDate);
    setDate(nextDate);
  };
  const handlePreviousYear = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, "year").toDate();
    onPreviousYear == null ? void 0 : onPreviousYear(nextDate);
    setDate(nextDate);
  };
  const handleNextDecade = () => {
    const nextDate = dayjs(currentDate).add(10 * _columnsToScroll, "year").toDate();
    onNextDecade == null ? void 0 : onNextDecade(nextDate);
    setDate(nextDate);
  };
  const handlePreviousDecade = () => {
    const nextDate = dayjs(currentDate).subtract(10 * _columnsToScroll, "year").toDate();
    onPreviousDecade == null ? void 0 : onPreviousDecade(nextDate);
    setDate(nextDate);
  };
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({ ref, size, "data-calendar": true }, others), _level === "month" && /* @__PURE__ */ React.createElement(
    MonthLevelGroup,
    __spreadValues({
      month: currentDate,
      minDate,
      maxDate,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      onNext: handleNextMonth,
      onPrevious: handlePreviousMonth,
      hasNextLevel: maxLevel !== "month",
      onLevelClick: () => setLevel("year"),
      numberOfColumns,
      locale,
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.monthLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextMonth,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousMonth,
      previousIcon,
      monthLabelFormat,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing
    }, stylesApiProps)
  ), _level === "year" && /* @__PURE__ */ React.createElement(
    YearLevelGroup,
    __spreadValues({
      year: currentDate,
      numberOfColumns,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      locale,
      onNext: handleNextYear,
      onPrevious: handlePreviousYear,
      hasNextLevel: maxLevel !== "month" && maxLevel !== "year",
      onLevelClick: () => setLevel("decade"),
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.yearLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextYear,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousYear,
      previousIcon,
      yearLabelFormat,
      __onControlMouseEnter: onMonthMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnMonthSelect && setDate(payload);
        setLevel(clampLevel("month", minLevel, maxLevel));
        onMonthSelect == null ? void 0 : onMonthSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ), _level === "decade" && /* @__PURE__ */ React.createElement(
    DecadeLevelGroup,
    __spreadValues({
      decade: currentDate,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      locale,
      onNext: handleNextDecade,
      onPrevious: handlePreviousDecade,
      numberOfColumns,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextDecade,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousDecade,
      previousIcon,
      decadeLabelFormat,
      __onControlMouseEnter: onYearMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnYearSelect && setDate(payload);
        setLevel(clampLevel("year", minLevel, maxLevel));
        onYearSelect == null ? void 0 : onYearSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ));
});
Calendar.classes = __spreadValues(__spreadValues(__spreadValues({}, DecadeLevelGroup.classes), YearLevelGroup.classes), MonthLevelGroup.classes);
Calendar.displayName = "@mantine/dates/Calendar";

export { Calendar };
//# sourceMappingURL=Calendar.js.map
