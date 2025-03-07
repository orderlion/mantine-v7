import React from 'react';
import { ModalRoot } from './ModalRoot.js';
import { ModalBody } from './ModalBody.js';
import { ModalCloseButton } from './ModalCloseButton.js';
import { ModalOverlay } from './ModalOverlay.js';
import { ModalContent } from './ModalContent.js';
import { ModalTitle } from './ModalTitle.js';
import { ModalHeader } from './ModalHeader.js';
import classes from './Modal.module.css.js';
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
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
const Modal = factory((_props, ref) => {
  const _a = useProps("Modal", defaultProps, _props), {
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
  return /* @__PURE__ */ React.createElement(ModalRoot, __spreadValues({ ref }, others), withOverlay && /* @__PURE__ */ React.createElement(ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React.createElement(ModalContent, { radius }, hasHeader && /* @__PURE__ */ React.createElement(ModalHeader, null, title && /* @__PURE__ */ React.createElement(ModalTitle, null, title), withCloseButton && /* @__PURE__ */ React.createElement(ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React.createElement(ModalBody, null, children)));
});
Modal.classes = classes;
Modal.displayName = "@mantine/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

export { Modal };
//# sourceMappingURL=Modal.js.map
