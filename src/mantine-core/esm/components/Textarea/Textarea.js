import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
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
const Textarea = factory((props, ref) => {
  const _a = useProps(
    "Textarea",
    defaultProps,
    props
  ), { autosize, maxRows, minRows, __staticSelector } = _a, others = __objRest(_a, ["autosize", "maxRows", "minRows", "__staticSelector"]);
  const autosizeProps = autosize ? { maxRows, minRows } : {};
  return /* @__PURE__ */ React.createElement(
    InputBase,
    __spreadValues(__spreadProps(__spreadValues({
      component: autosize ? TextareaAutosize : "textarea",
      ref
    }, others), {
      __staticSelector: __staticSelector || "Textarea",
      multiline: true,
      "data-no-overflow": autosize && maxRows === void 0 || void 0
    }), autosizeProps)
  );
});
Textarea.classes = InputBase.classes;
Textarea.displayName = "@mantine/core/Textarea";

export { Textarea };
//# sourceMappingURL=Textarea.js.map
