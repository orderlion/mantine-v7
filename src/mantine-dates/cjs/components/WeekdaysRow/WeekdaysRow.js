'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getWeekdaysNames = require('./get-weekdays-names/get-weekdays-names.js');
var WeekdaysRow_module = require('./WeekdaysRow.module.css.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');

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
const defaultProps = {};
const varsResolver = core.createVarsResolver((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": core.getFontSize(size),
    "--wr-spacing": core.getSpacing(size)
  }
}));
const WeekdaysRow = core.factory((_props, ref) => {
  const props = core.useProps("WeekdaysRow", defaultProps, _props);
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
  const getStyles = core.useStyles({
    name: __staticSelector || "WeekdaysRow",
    classes: WeekdaysRow_module['default'],
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
  const ctx = useDatesContext.useDatesContext();
  const weekdays = getWeekdaysNames.getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => /* @__PURE__ */ React__default.createElement(CellComponent, __spreadValues({ key: index }, getStyles("weekday")), weekday));
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues(__spreadValues({ component: "tr", ref }, getStyles("weekdaysRow")), others), weekdays);
});
WeekdaysRow.classes = WeekdaysRow_module['default'];
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

exports.WeekdaysRow = WeekdaysRow;
//# sourceMappingURL=WeekdaysRow.js.map
