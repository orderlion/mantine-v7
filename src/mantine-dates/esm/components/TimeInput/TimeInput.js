import React from 'react';
import cx from 'clsx';
import { factory, useProps, useResolvedStylesApi, InputBase } from '@mantine/core';
import classes from './TimeInput.module.css.js';

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
const TimeInput = factory((_props, ref) => {
  const props = useProps("TimeInput", defaultProps, _props);
  const _a = props, { classNames, styles, unstyled, vars, withSeconds } = _a, others = __objRest(_a, ["classNames", "styles", "unstyled", "vars", "withSeconds"]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      classNames: __spreadProps(__spreadValues({}, resolvedClassNames), { input: cx(classes.input, resolvedClassNames == null ? void 0 : resolvedClassNames.input) }),
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
TimeInput.classes = InputBase.classes;
TimeInput.displayName = "@mantine/dates/TimeInput";

export { TimeInput };
//# sourceMappingURL=TimeInput.js.map
