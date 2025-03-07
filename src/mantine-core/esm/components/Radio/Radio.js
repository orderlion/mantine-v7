import React from 'react';
import { useId } from '@mantine/hooks';
import { RadioIcon } from './RadioIcon.js';
import { RadioGroup } from './RadioGroup/RadioGroup.js';
import { useRadioGroupContext } from './RadioGroup.context.js';
import classes from './Radio.module.css.js';
import { InlineInput } from '../InlineInput/InlineInput.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { extractStyleProps } from '../../core/Box/style-props/extract-style-props/extract-style-props.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize, getRadius } from '../../core/utils/get-size/get-size.js';
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
  labelPosition: "right",
  radius: "xl"
};
const varsResolver = createVarsResolver((theme, { size, radius, color }) => ({
  root: {
    "--radio-size": getSize(size, "radio-size"),
    "--radio-radius": getRadius(radius),
    "--radio-color": getThemeColor(color, theme)
  }
}));
const Radio = factory((_props, ref) => {
  var _b, _c;
  const props = useProps("Radio", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    size,
    label,
    labelPosition,
    description,
    error,
    radius,
    color,
    variant,
    disabled,
    wrapperProps,
    icon: Icon = RadioIcon
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "id",
    "size",
    "label",
    "labelPosition",
    "description",
    "error",
    "radius",
    "color",
    "variant",
    "disabled",
    "wrapperProps",
    "icon"
  ]);
  const getStyles = useStyles({
    name: "Radio",
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
  const ctx = useRadioGroupContext();
  const contextSize = (_b = ctx == null ? void 0 : ctx.size) != null ? _b : size;
  const componentSize = props.size ? size : contextSize;
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value === rest.value,
    name: (_c = rest.name) != null ? _c : ctx.name,
    onChange: ctx.onChange
  } : {};
  return /* @__PURE__ */ React.createElement(
    InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Radio",
      __stylesApiProps: props,
      id: uuid,
      size: componentSize,
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
    /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, getStyles("inner")), { mod: { "label-position": labelPosition } }), /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles("radio", { focusable: true })), rest), contextProps), {
        component: "input",
        mod: { error: !!error },
        ref,
        id: uuid,
        disabled,
        type: "radio"
      })
    ), /* @__PURE__ */ React.createElement(Icon, __spreadProps(__spreadValues({}, getStyles("icon")), { "aria-hidden": true })))
  );
});
Radio.classes = classes;
Radio.displayName = "@mantine/core/Radio";
Radio.Group = RadioGroup;

export { Radio };
//# sourceMappingURL=Radio.js.map
