'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ModalRoot = require('./ModalRoot.js');
var ModalBody = require('./ModalBody.js');
var ModalCloseButton = require('./ModalCloseButton.js');
var ModalOverlay = require('./ModalOverlay.js');
var ModalContent = require('./ModalContent.js');
var ModalTitle = require('./ModalTitle.js');
var ModalHeader = require('./ModalHeader.js');
var Modal_module = require('./Modal.module.css.js');
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
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
const Modal = factory.factory((_props, ref) => {
  const _a = useProps.useProps("Modal", defaultProps, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children",
    "radius"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ React__default.createElement(ModalRoot.ModalRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ React__default.createElement(ModalOverlay.ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React__default.createElement(ModalContent.ModalContent, { radius }, hasHeader && /* @__PURE__ */ React__default.createElement(ModalHeader.ModalHeader, null, title && /* @__PURE__ */ React__default.createElement(ModalTitle.ModalTitle, null, title), withCloseButton && /* @__PURE__ */ React__default.createElement(ModalCloseButton.ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React__default.createElement(ModalBody.ModalBody, null, children)));
});
Modal.classes = Modal_module['default'];
Modal.displayName = "@mantine/core/Modal";
Modal.Root = ModalRoot.ModalRoot;
Modal.Overlay = ModalOverlay.ModalOverlay;
Modal.Content = ModalContent.ModalContent;
Modal.Body = ModalBody.ModalBody;
Modal.Header = ModalHeader.ModalHeader;
Modal.Title = ModalTitle.ModalTitle;
Modal.CloseButton = ModalCloseButton.ModalCloseButton;

exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map
