import React, { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useMenuContext } from '../Menu.context.js';
import classes from '../Menu.module.css.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';
import { polymorphicFactory } from '../../../core/factory/polymorphic-factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { useDirection } from '../../../core/DirectionProvider/DirectionProvider.js';
import { createScopedKeydownHandler } from '../../../core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.js';
import { createEventHandler } from '../../../core/utils/create-event-handler/create-event-handler.js';

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
const MenuItem = polymorphicFactory((props, ref) => {
  const _a = useProps("MenuItem", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    closeMenuOnClick,
    leftSection,
    rightSection,
    children,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "closeMenuOnClick",
    "leftSection",
    "rightSection",
    "children",
    "disabled"
  ]);
  const ctx = useMenuContext();
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef();
  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others = others;
  const handleMouseLeave = createEventHandler(_others.onMouseLeave, () => ctx.setHovered(-1));
  const handleMouseEnter = createEventHandler(
    _others.onMouseEnter,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const handleClick = createEventHandler(_others.onClick, () => {
    if (typeof closeMenuOnClick === "boolean") {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });
  const handleFocus = createEventHandler(
    _others.onFocus,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const colors = color ? theme.variantColorResolver({ color, theme, variant: "light" }) : void 0;
  return /* @__PURE__ */ React.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, others), {
      tabIndex: -1,
      onFocus: handleFocus
    }), ctx.getStyles("item", { className, style, styles, classNames })), {
      ref: useMergedRef(itemRef, ref),
      role: "menuitem",
      disabled,
      "data-menu-item": true,
      "data-disabled": disabled || void 0,
      "data-hovered": ctx.hovered === itemIndex ? true : void 0,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: "[data-menu-item]",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: "vertical",
        onKeyDown: _others.onKeydown
      }),
      __vars: {
        "--menu-item-color": colors == null ? void 0 : colors.color,
        "--menu-item-hover": colors == null ? void 0 : colors.hover
      }
    }),
    leftSection && /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), { "data-position": "left" }), leftSection),
    children && /* @__PURE__ */ React.createElement("div", __spreadValues({}, ctx.getStyles("itemLabel", { styles, classNames })), children),
    rightSection && /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, ctx.getStyles("itemSection", { styles, classNames })), { "data-position": "right" }), rightSection)
  );
});
MenuItem.classes = classes;
MenuItem.displayName = "@mantine/core/MenuItem";

export { MenuItem };
//# sourceMappingURL=MenuItem.js.map
