'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var useDatesState = require('../../hooks/use-dates-state/use-dates-state.js');
var Calendar = require('../Calendar/Calendar.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
  type: "default",
  defaultLevel: "month",
  numberOfColumns: 1
};
const DatePicker = core.factory((_props, ref) => {
  const props = core.useProps("DatePicker", defaultProps, _props);
  const _a = props, {
    classNames,
    styles,
    unstyled,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getDayProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    numberOfColumns,
    hideOutsideDates,
    __onDayMouseEnter,
    __onDayClick
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "type",
    "defaultValue",
    "value",
    "onChange",
    "__staticSelector",
    "getDayProps",
    "allowSingleDateInRange",
    "allowDeselect",
    "onMouseLeave",
    "numberOfColumns",
    "hideOutsideDates",
    "__onDayMouseEnter",
    "__onDayClick"
  ]);
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState.useDatesState({
    type,
    level: "day",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave
  });
  const { resolvedClassNames, resolvedStyles } = core.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React__default.createElement(
    Calendar.Calendar,
    __spreadValues({
      ref,
      minLevel: "month",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: __staticSelector || "DatePicker",
      onMouseLeave: onRootMouseLeave,
      numberOfColumns,
      hideOutsideDates: hideOutsideDates != null ? hideOutsideDates : numberOfColumns !== 1,
      __onDayMouseEnter: (_event, date) => {
        onHoveredDateChange(date);
        __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(_event, date);
      },
      __onDayClick: (_event, date) => {
        onDateChange(date);
        __onDayClick == null ? void 0 : __onDayClick(_event, date);
      },
      getDayProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getDayProps == null ? void 0 : getDayProps(date))
    }, others)
  );
});
DatePicker.classes = Calendar.Calendar.classes;
DatePicker.displayName = "@mantine/dates/DatePicker";

exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.js.map
