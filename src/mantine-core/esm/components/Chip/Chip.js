import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { useChipGroupContext } from './ChipGroup.context.js';
import { ChipGroup } from './ChipGroup/ChipGroup.js';
import classes from './Chip.module.css.js';
import { CheckIcon } from '../Checkbox/CheckIcon.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { extractStyleProps } from '../../core/Box/style-props/extract-style-props/extract-style-props.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getFontSize, getSize, getRadius } from '../../core/utils/get-size/get-size.js';

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
  type: "checkbox",
  size: "sm",
  radius: "xl",
  variant: "outline"
};
const varsResolver = createVarsResolver((theme, { size, radius, variant, color }) => {
  const colors = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    variant
  });
  return {
    root: {
      "--chip-fz": getFontSize(size),
      "--chip-size": getSize(size, "chip-size"),
      "--chip-radius": getRadius(radius),
      "--chip-checked-padding": getSize(size, "chip-checked-padding"),
      "--chip-padding": getSize(size, "chip-padding"),
      "--chip-icon-size": getSize(size, "chip-icon-size"),
      "--chip-bg": colors.background,
      "--chip-hover": colors.hover,
      "--chip-color": colors.color,
      "--chip-bd": colors.border,
      "--chip-spacing": getSize(size, "chip-spacing")
    }
  };
});
const Chip = factory((_props, ref) => {
  const props = useProps("Chip", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    checked,
    defaultChecked,
    onChange,
    value,
    wrapperProps,
    type,
    disabled,
    children,
    size,
    variant,
    icon
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "id",
    "checked",
    "defaultChecked",
    "onChange",
    "value",
    "wrapperProps",
    "type",
    "disabled",
    "children",
    "size",
    "variant",
    "icon"
  ]);
  const getStyles = useStyles({
    name: "Chip",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const ctx = useChipGroupContext();
  const uuid = useId(id);
  const { styleProps, rest } = extractStyleProps(others);
  const [_value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange
  });
  const contextProps = ctx ? {
    checked: ctx.isChipSelected(value),
    onChange: ctx.onChange,
    type: ctx.multiple ? "checkbox" : "radio"
  } : {};
  const _checked = contextProps.checked || _value;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues(__spreadValues({ size, variant }, getStyles("root")), styleProps), wrapperProps), /* @__PURE__ */ React.createElement(
    "input",
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({
      type
    }, getStyles("input")), {
      checked: _checked,
      onChange: (event) => setValue(event.currentTarget.checked),
      id: uuid,
      disabled,
      ref,
      value
    }), contextProps), rest)
  ), /* @__PURE__ */ React.createElement(
    "label",
    __spreadValues({
      htmlFor: uuid,
      "data-checked": _checked || void 0,
      "data-disabled": disabled || void 0
    }, getStyles("label", { variant })),
    _checked && /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("iconWrapper")), icon || /* @__PURE__ */ React.createElement(CheckIcon, __spreadValues({}, getStyles("checkIcon")))),
    children
  ));
});
Chip.classes = classes;
Chip.displayName = "@mantine/core/Chip";
Chip.Group = ChipGroup;

export { Chip };
//# sourceMappingURL=Chip.js.map
