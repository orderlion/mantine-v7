import React, { forwardRef, useRef, useEffect } from 'react';
import { Notification } from '@mantine/core';
import { getAutoClose } from './get-auto-close/get-auto-close.js';

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
const NotificationContainer = forwardRef(
  (_a, ref) => {
    var _b = _a, { data, onHide, autoClose } = _b, others = __objRest(_b, ["data", "onHide", "autoClose"]);
    const _a2 = data, { autoClose: _autoClose, message } = _a2, notificationProps = __objRest(_a2, ["autoClose", "message"]);
    const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
    const autoCloseTimeout = useRef();
    const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);
    const handleHide = () => {
      onHide(data.id);
      cancelAutoClose();
    };
    const handleAutoClose = () => {
      if (typeof autoCloseDuration === "number") {
        autoCloseTimeout.current = window.setTimeout(handleHide, autoCloseDuration);
      }
    };
    useEffect(() => {
      var _a3;
      (_a3 = data.onOpen) == null ? void 0 : _a3.call(data, data);
    }, []);
    useEffect(() => {
      handleAutoClose();
      return cancelAutoClose;
    }, [autoCloseDuration]);
    return /* @__PURE__ */ React.createElement(
      Notification,
      __spreadProps(__spreadValues(__spreadValues({}, others), notificationProps), {
        onClose: handleHide,
        ref,
        onMouseEnter: cancelAutoClose,
        onMouseLeave: handleAutoClose
      }),
      message
    );
  }
);
NotificationContainer.displayName = "@mantine/notifications/NotificationContainer";

export { NotificationContainer };
//# sourceMappingURL=NotificationContainer.js.map
