import React from 'react';
import { DrawerRoot } from './DrawerRoot.js';
import { DrawerBody } from './DrawerBody.js';
import { DrawerCloseButton } from './DrawerCloseButton.js';
import { DrawerOverlay } from './DrawerOverlay.js';
import { DrawerContent } from './DrawerContent.js';
import { DrawerTitle } from './DrawerTitle.js';
import { DrawerHeader } from './DrawerHeader.js';
import classes from './Drawer.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { getDefaultZIndex } from '../../core/utils/get-default-z-index/get-default-z-index.js';

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
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  withOverlay: true,
  withCloseButton: true
};
const Drawer = factory((_props, ref) => {
  const _a = useProps("Drawer", defaultProps, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ React.createElement(DrawerRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ React.createElement(DrawerOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React.createElement(DrawerContent, null, hasHeader && /* @__PURE__ */ React.createElement(DrawerHeader, null, title && /* @__PURE__ */ React.createElement(DrawerTitle, null, title), withCloseButton && /* @__PURE__ */ React.createElement(DrawerCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React.createElement(DrawerBody, null, children)));
});
Drawer.classes = classes;
Drawer.displayName = "@mantine/core/Drawer";
Drawer.Root = DrawerRoot;
Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.CloseButton = DrawerCloseButton;

export { Drawer };
//# sourceMappingURL=Drawer.js.map
