import React from 'react';
import { useModalContext } from './Modal.context.js';
import classes from './Modal.module.css.js';
import { ModalBaseCloseButton } from '../ModalBase/ModalBaseCloseButton.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';

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
const ModalCloseButton = factory((_props, ref) => {
  const props = useProps("ModalCloseButton", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React.createElement(
    ModalBaseCloseButton,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("close", { classNames, style, styles, className })), others)
  );
});
ModalCloseButton.classes = classes;
ModalCloseButton.displayName = "@mantine/core/ModalCloseButton";

export { ModalCloseButton };
//# sourceMappingURL=ModalCloseButton.js.map
