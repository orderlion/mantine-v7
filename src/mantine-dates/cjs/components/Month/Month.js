'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var getMonthDays = require('./get-month-days/get-month-days.js');
var getDateInTabOrder = require('./get-date-in-tab-order/get-date-in-tab-order.js');
var isSameMonth = require('./is-same-month/is-same-month.js');
var isBeforeMaxDate = require('./is-before-max-date/is-before-max-date.js');
var isAfterMinDate = require('./is-after-min-date/is-after-min-date.js');
var Month_module = require('./Month.module.css.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var Day = require('../Day/Day.js');
var WeekdaysRow = require('../WeekdaysRow/WeekdaysRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  size: "sm",
  withCellSpacing: true
};
const Month = core.factory((_props, ref) => {
  const props = core.useProps("Month", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
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
    "__staticSelector",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "month",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "static",
    "__getDayRef",
    "__onDayKeyDown",
    "__onDayClick",
    "__onDayMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size"
  ]);
  const getStyles = core.useStyles({
    name: __staticSelector || "Month",
    classes: Month_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "month"
  });
  const ctx = useDatesContext.useDatesContext();
  const dates = getMonthDays.getMonthDays(month, ctx.getFirstDayOfWeek(firstDayOfWeek));
  const dateInTabOrder = getDateInTabOrder.getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );
  const { resolvedClassNames, resolvedStyles } = core.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth.isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || dayjs__default(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = dayjs__default(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ React__default.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: date.toString()
        }, getStyles("monthCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React__default.createElement(
          Day.Day,
          __spreadProps(__spreadValues({
            __staticSelector: __staticSelector || "Month",
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            renderDay,
            date,
            size,
            weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
            outside,
            hidden: hideOutsideDates ? outside : false,
            "aria-label": ariaLabel,
            static: isStatic,
            disabled: (excludeDate == null ? void 0 : excludeDate(date)) || !isBeforeMaxDate.isBeforeMaxDate(date, maxDate) || !isAfterMinDate.isAfterMinDate(date, minDate),
            ref: (node) => __getDayRef == null ? void 0 : __getDayRef(rowIndex, cellIndex, node)
          }, dayProps), {
            onKeyDown: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onKeyDown) == null ? void 0 : _a2.call(dayProps, event);
              __onDayKeyDown == null ? void 0 : __onDayKeyDown(event, { rowIndex, cellIndex, date });
            },
            onMouseEnter: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onMouseEnter) == null ? void 0 : _a2.call(dayProps, event);
              __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(event, date);
            },
            onClick: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onClick) == null ? void 0 : _a2.call(dayProps, event);
              __onDayClick == null ? void 0 : __onDayClick(event, date);
            },
            onMouseDown: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onMouseDown) == null ? void 0 : _a2.call(dayProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
          })
        )
      );
    });
    return /* @__PURE__ */ React__default.createElement("tr", __spreadValues({ key: rowIndex }, getStyles("monthRow")), cells);
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues(__spreadProps(__spreadValues({ component: "table" }, getStyles("month")), { size, ref }), others), !hideWeekdays && /* @__PURE__ */ React__default.createElement("thead", __spreadValues({}, getStyles("monthThead")), /* @__PURE__ */ React__default.createElement(
    WeekdaysRow.WeekdaysRow,
    {
      __staticSelector: __staticSelector || "Month",
      locale,
      firstDayOfWeek,
      weekdayFormat,
      size,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled
    }
  )), /* @__PURE__ */ React__default.createElement("tbody", __spreadValues({}, getStyles("monthTbody")), rows));
});
Month.classes = Month_module['default'];
Month.displayName = "@mantine/dates/Month";

exports.Month = Month;
//# sourceMappingURL=Month.js.map
