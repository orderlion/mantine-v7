import React from 'react';
import { useComboboxContext } from '../Combobox.context.js';
import classes from '../Combobox.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { Box } from '../../../core/Box/Box.js';

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
const ComboboxGroup = factory((props, ref) => {
  const _a = useProps("ComboboxGroup", defaultProps, props), { classNames, className, style, styles, unstyled, vars, children, label } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "children", "label"]);
  const ctx = useComboboxContext();
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("group", { className, classNames, style, styles })), others),
    label && /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("groupLabel", { classNames, styles })), label),
    children
  );
});
ComboboxGroup.classes = classes;
ComboboxGroup.displayName = "@mantine/core/ComboboxGroup";

export { ComboboxGroup };
//# sourceMappingURL=ComboboxGroup.js.map
