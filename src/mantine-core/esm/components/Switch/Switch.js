import React from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { useSwitchGroupContext } from './SwitchGroup.context.js';
import { SwitchGroup } from './SwitchGroup/SwitchGroup.js';
import classes from './Switch.module.css.js';
import { InlineInput, InlineInputClasses } from '../InlineInput/InlineInput.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { extractStyleProps } from '../../core/Box/style-props/extract-style-props/extract-style-props.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getRadius, getSize } from '../../core/utils/get-size/get-size.js';
import { getThemeColor } from '../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js';

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
  size: "sm",
  radius: "xl",
  labelPosition: "right"
};
const varsResolver = createVarsResolver((theme, { radius, color, size }) => ({
  root: {
    "--switch-radius": getRadius(radius),
    "--switch-height": getSize(size, "switch-height"),
    "--switch-width": getSize(size, "switch-width"),
    "--switch-thumb-size": getSize(size, "switch-thumb-size"),
    "--switch-label-font-size": getSize(size, "switch-label-font-size"),
    "--switch-track-label-padding": getSize(size, "switch-track-label-padding"),
    "--switch-color": getThemeColor(color, theme)
  }
}));
const Switch = factory((_props, ref) => {
  var _b;
  const props = useProps("Switch", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "offLabel",
    "onLabel",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "thumbIcon",
    "checked",
    "defaultChecked",
    "onChange",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant"
  ]);
  const ctx = useSwitchGroupContext();
  const _size = size || (ctx == null ? void 0 : ctx.size);
  const getStyles = useStyles({
    name: "Switch",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  const [_checked, handleChange] = useUncontrolled({
    value: (_b = contextProps.checked) != null ? _b : checked,
    defaultValue: defaultChecked,
    finalValue: false
  });
  return /* @__PURE__ */ React.createElement(
    InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Switch",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant
    }), styleProps), wrapperProps),
    /* @__PURE__ */ React.createElement(
      "input",
      __spreadValues(__spreadProps(__spreadValues({}, rest), {
        disabled,
        checked: _checked,
        onChange: (event) => {
          var _a2;
          ctx ? (_a2 = contextProps.onChange) == null ? void 0 : _a2.call(contextProps, event) : onChange == null ? void 0 : onChange(event);
          handleChange(event.currentTarget.checked);
        },
        id: uuid,
        ref,
        type: "checkbox"
      }), getStyles("input"))
    ),
    /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues({
        component: "label",
        htmlFor: uuid,
        mod: { error, "label-position": labelPosition }
      }, getStyles("track")),
      /* @__PURE__ */ React.createElement(Box, __spreadValues({ component: "span", mod: "reduce-motion" }, getStyles("thumb")), thumbIcon),
      /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("trackLabel")), _checked ? onLabel : offLabel)
    )
  );
});
Switch.classes = __spreadValues(__spreadValues({}, classes), InlineInputClasses);
Switch.displayName = "@mantine/core/Switch";
Switch.Group = SwitchGroup;

export { Switch };
//# sourceMappingURL=Switch.js.map
