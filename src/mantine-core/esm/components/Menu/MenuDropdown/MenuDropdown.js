import React, { useRef } from 'react';
import classes from '../Menu.module.css.js';
import { useMenuContext } from '../Menu.context.js';
import { Popover } from '../../Popover/Popover.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
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
const MenuDropdown = factory((props, ref) => {
  const _a = useProps("MenuDropdown", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onMouseEnter,
    onMouseLeave,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "onMouseEnter",
    "onMouseLeave",
    "children"
  ]);
  const wrapperRef = useRef(null);
  const ctx = useMenuContext();
  const handleKeyDown = (event) => {
    var _a2, _b;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      (_b = (_a2 = wrapperRef.current) == null ? void 0 : _a2.querySelectorAll("[data-menu-item]:not(:disabled)")[0]) == null ? void 0 : _b.focus();
    }
  };
  const handleMouseEnter = createEventHandler(
    onMouseEnter,
    () => ctx.trigger === "hover" && ctx.openDropdown()
  );
  const handleMouseLeave = createEventHandler(
    onMouseLeave,
    () => ctx.trigger === "hover" && ctx.closeDropdown()
  );
  return /* @__PURE__ */ React.createElement(
    Popover.Dropdown,
    __spreadValues(__spreadProps(__spreadValues({}, others), {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      role: "menu",
      "aria-orientation": "vertical",
      ref
    }), ctx.getStyles("dropdown", { className, style, styles, classNames })),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        tabIndex: -1,
        "data-menu-dropdown": true,
        "data-autofocus": true,
        onKeyDown: handleKeyDown,
        ref: wrapperRef,
        style: { outline: 0 }
      },
      children
    )
  );
});
MenuDropdown.classes = classes;
MenuDropdown.displayName = "@mantine/core/MenuDropdown";

export { MenuDropdown };
//# sourceMappingURL=MenuDropdown.js.map
