import React from 'react';
import { createVarsResolver, getFontSize, getSize, factory, useProps, useStyles, UnstyledButton } from '@mantine/core';
import classes from './PickerControl.module.css.js';

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
  size: "sm"
};
const varsResolver = createVarsResolver((_, { size }) => ({
  pickerControl: {
    "--dpc-fz": getFontSize(size),
    "--dpc-size": getSize(size, "dpc-size")
  }
}));
const PickerControl = factory((_props, ref) => {
  const props = useProps("PickerControl", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "firstInRange",
    "lastInRange",
    "inRange",
    "__staticSelector",
    "selected",
    "disabled"
  ]);
  const getStyles = useStyles({
    name: __staticSelector || "PickerControl",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "pickerControl"
  });
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("pickerControl")), {
      ref,
      unstyled,
      "data-picker-control": true,
      "data-selected": selected && !disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-in-range": inRange && !disabled && !selected || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      disabled
    }), others)
  );
});
PickerControl.classes = classes;
PickerControl.displayName = "@mantine/dates/PickerControl";

export { PickerControl };
//# sourceMappingURL=PickerControl.js.map
