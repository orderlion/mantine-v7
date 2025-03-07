'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DrawerRoot = require('./DrawerRoot.js');
var DrawerBody = require('./DrawerBody.js');
var DrawerCloseButton = require('./DrawerCloseButton.js');
var DrawerOverlay = require('./DrawerOverlay.js');
var DrawerContent = require('./DrawerContent.js');
var DrawerTitle = require('./DrawerTitle.js');
var DrawerHeader = require('./DrawerHeader.js');
var Drawer_module = require('./Drawer.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var getDefaultZIndex = require('../../core/utils/get-default-z-index/get-default-z-index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  zIndex: getDefaultZIndex.getDefaultZIndex("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  withOverlay: true,
  withCloseButton: true
};
const Drawer = factory.factory((_props, ref) => {
  const _a = useProps.useProps("Drawer", defaultProps, _props), {
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
  return /* @__PURE__ */ React__default.createElement(DrawerRoot.DrawerRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ React__default.createElement(DrawerOverlay.DrawerOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React__default.createElement(DrawerContent.DrawerContent, null, hasHeader && /* @__PURE__ */ React__default.createElement(DrawerHeader.DrawerHeader, null, title && /* @__PURE__ */ React__default.createElement(DrawerTitle.DrawerTitle, null, title), withCloseButton && /* @__PURE__ */ React__default.createElement(DrawerCloseButton.DrawerCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React__default.createElement(DrawerBody.DrawerBody, null, children)));
});
Drawer.classes = Drawer_module['default'];
Drawer.displayName = "@mantine/core/Drawer";
Drawer.Root = DrawerRoot.DrawerRoot;
Drawer.Overlay = DrawerOverlay.DrawerOverlay;
Drawer.Content = DrawerContent.DrawerContent;
Drawer.Body = DrawerBody.DrawerBody;
Drawer.Header = DrawerHeader.DrawerHeader;
Drawer.Title = DrawerTitle.DrawerTitle;
Drawer.CloseButton = DrawerCloseButton.DrawerCloseButton;

exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map
