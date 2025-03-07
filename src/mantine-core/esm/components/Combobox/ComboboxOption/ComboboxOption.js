import React, { useId } from 'react';
import { useComboboxContext } from '../Combobox.context.js';
import classes from '../Combobox.module.css.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { Box } from '../../../core/Box/Box.js';

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
const ComboboxOption = factory((_props, ref) => {
  const props = useProps("ComboboxOption", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onClick,
    id,
    active,
    onMouseDown,
    onMouseOver,
    disabled,
    selected
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "onClick",
    "id",
    "active",
    "onMouseDown",
    "onMouseOver",
    "disabled",
    "selected"
  ]);
  const ctx = useComboboxContext();
  const uuid = useId();
  const _id = id || uuid;
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadProps(__spreadValues(__spreadValues({}, ctx.getStyles("option", { className, classNames, styles, style })), others), {
      ref,
      id: _id,
      mod: [
        "combobox-option",
        { "combobox-active": active, "combobox-disabled": disabled, "combobox-selected": selected }
      ],
      role: "option",
      onClick: (event) => {
        var _a2;
        if (!disabled) {
          (_a2 = ctx.onOptionSubmit) == null ? void 0 : _a2.call(ctx, props.value, props);
          onClick == null ? void 0 : onClick(event);
        } else {
          event.preventDefault();
        }
      },
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
      },
      onMouseOver: (event) => {
        if (ctx.resetSelectionOnOptionHover) {
          ctx.store.resetSelectedOption();
        }
        onMouseOver == null ? void 0 : onMouseOver(event);
      }
    })
  );
});
ComboboxOption.classes = classes;
ComboboxOption.displayName = "@mantine/core/ComboboxOption";

export { ComboboxOption };
//# sourceMappingURL=ComboboxOption.js.map
