import React, { useRef } from 'react';
import { PillsInputProvider } from './PillsInput.context.js';
import { PillsInputField } from './PillsInputField/PillsInputField.js';
import { InputBase } from '../InputBase/InputBase.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';

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
const PillsInput = factory((_props, ref) => {
  const props = useProps("PillsInput", defaultProps, _props);
  const _a = props, {
    children,
    onMouseDown,
    onClick,
    size,
    disabled,
    __staticSelector,
    error,
    variant
  } = _a, others = __objRest(_a, [
    "children",
    "onMouseDown",
    "onClick",
    "size",
    "disabled",
    "__staticSelector",
    "error",
    "variant"
  ]);
  const fieldRef = useRef();
  return /* @__PURE__ */ React.createElement(PillsInputProvider, { value: { fieldRef, size, disabled, hasError: !!error, variant } }, /* @__PURE__ */ React.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      size,
      error,
      variant,
      component: "div",
      ref,
      onMouseDown: (event) => {
        var _a2;
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
        (_a2 = fieldRef.current) == null ? void 0 : _a2.focus();
      },
      onClick: (event) => {
        var _a2;
        event.preventDefault();
        onClick == null ? void 0 : onClick(event);
        (_a2 = fieldRef.current) == null ? void 0 : _a2.focus();
      }
    }, others), {
      multiline: true,
      disabled,
      __staticSelector: __staticSelector || "PillsInput",
      withAria: false
    }),
    children
  ));
});
PillsInput.displayName = "@mantine/core/PillsInput";
PillsInput.Field = PillsInputField;

export { PillsInput };
//# sourceMappingURL=PillsInput.js.map
