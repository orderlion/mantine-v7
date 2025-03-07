'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var TimeInput_module = require('./TimeInput.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
const defaultProps = {};
const TimeInput = core.factory((_props, ref) => {
  const props = core.useProps("TimeInput", defaultProps, _props);
  const _a = props, { classNames, styles, unstyled, vars, withSeconds } = _a, others = __objRest(_a, ["classNames", "styles", "unstyled", "vars", "withSeconds"]);
  const { resolvedClassNames, resolvedStyles } = core.useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React__default.createElement(
    core.InputBase,
    __spreadProps(__spreadValues({
      classNames: __spreadProps(__spreadValues({}, resolvedClassNames), { input: cx__default(TimeInput_module['default'].input, resolvedClassNames == null ? void 0 : resolvedClassNames.input) }),
      styles: resolvedStyles,
      unstyled,
      ref
    }, others), {
      step: withSeconds ? 1 : 60,
      type: "time",
      __staticSelector: "TimeInput"
    })
  );
});
TimeInput.classes = core.InputBase.classes;
TimeInput.displayName = "@mantine/dates/TimeInput";

exports.TimeInput = TimeInput;
//# sourceMappingURL=TimeInput.js.map
