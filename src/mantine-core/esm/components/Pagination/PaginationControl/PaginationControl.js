import React from 'react';
import { usePaginationContext } from '../Pagination.context.js';
import classes from '../Pagination.module.css.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';

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
  withPadding: true
};
const PaginationControl = factory((_props, ref) => {
  const props = useProps("PaginationControl", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    active,
    disabled,
    withPadding
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "active",
    "disabled",
    "withPadding"
  ]);
  const ctx = usePaginationContext();
  const _disabled = disabled || ctx.disabled;
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadValues(__spreadValues({
      ref,
      disabled: _disabled,
      mod: { active, disabled: _disabled, "with-padding": withPadding }
    }, ctx.getStyles("control", { className, style, classNames, styles, active: !_disabled })), others)
  );
});
PaginationControl.classes = classes;
PaginationControl.displayName = "@mantine/core/PaginationControl";

export { PaginationControl };
//# sourceMappingURL=PaginationControl.js.map
