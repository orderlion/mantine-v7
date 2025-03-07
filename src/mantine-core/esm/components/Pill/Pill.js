import React from 'react';
import { PillGroup } from './PillGroup/PillGroup.js';
import { usePillGroupContext } from './PillGroup.context.js';
import { usePillsInputContext } from '../PillsInput/PillsInput.context.js';
import classes from './Pill.module.css.js';
import { CloseButton } from '../CloseButton/CloseButton.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize, getRadius } from '../../core/utils/get-size/get-size.js';

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
  radius: "xl",
  variant: "default"
};
const varsResolver = createVarsResolver((_, { radius }, { size }) => ({
  root: {
    "--pill-fz": getSize(size, "pill-fz"),
    "--pill-height": getSize(size, "pill-height"),
    "--pill-radius": getRadius(radius)
  }
}));
const Pill = factory((_props, ref) => {
  const props = useProps("Pill", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    size,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "variant",
    "children",
    "withRemoveButton",
    "onRemove",
    "removeButtonProps",
    "radius",
    "size",
    "disabled"
  ]);
  const ctx = usePillGroupContext();
  const pillsInputCtx = usePillsInputContext();
  const _size = size || (ctx == null ? void 0 : ctx.size) || "sm";
  const _variant = (pillsInputCtx == null ? void 0 : pillsInputCtx.variant) === "filled" ? "contrast" : variant || "default";
  const getStyles = useStyles({
    name: "Pill",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    stylesCtx: { size: _size }
  });
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "span",
      ref,
      variant: _variant,
      size: _size
    }, getStyles("root", { variant: _variant })), {
      mod: { "with-remove": withRemoveButton, disabled: disabled || (ctx == null ? void 0 : ctx.disabled) }
    }), others),
    /* @__PURE__ */ React.createElement("span", __spreadValues({}, getStyles("label")), children),
    withRemoveButton && /* @__PURE__ */ React.createElement(
      CloseButton,
      __spreadProps(__spreadValues(__spreadValues({
        iconSize: "70%",
        variant: "transparent",
        radius,
        tabIndex: -1,
        "aria-hidden": true
      }, removeButtonProps), getStyles("remove", {
        className: removeButtonProps == null ? void 0 : removeButtonProps.className,
        style: removeButtonProps == null ? void 0 : removeButtonProps.style
      })), {
        onMouseDown: (event) => {
          var _a2;
          event.preventDefault();
          event.stopPropagation();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onMouseDown) == null ? void 0 : _a2.call(removeButtonProps, event);
        },
        onClick: (event) => {
          var _a2;
          event.stopPropagation();
          onRemove == null ? void 0 : onRemove();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onClick) == null ? void 0 : _a2.call(removeButtonProps, event);
        }
      })
    )
  );
});
Pill.classes = classes;
Pill.displayName = "@mantine/core/Pill";
Pill.Group = PillGroup;

export { Pill };
//# sourceMappingURL=Pill.js.map
