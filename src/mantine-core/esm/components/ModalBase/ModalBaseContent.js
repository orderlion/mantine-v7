import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useModalBaseContext } from './ModalBase.context.js';
import classes from './ModalBase.module.css.js';
import { Transition } from '../Transition/Transition.js';
import { FocusTrap } from '../FocusTrap/FocusTrap.js';
import { Paper } from '../Paper/Paper.js';

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
const ModalBaseContent = forwardRef(
  (_a, ref) => {
    var _b = _a, { transitionProps, className, innerProps, onKeyDown, style } = _b, others = __objRest(_b, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const ctx = useModalBaseContext();
    const handleKeyDown = (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute("data-mantine-stop-propagation")) !== "true";
      shouldTrigger && event.key === "Escape" && ctx.closeOnEscape && ctx.onClose();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ React.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, innerProps), { className: cx(classes.inner, innerProps.className) }), /* @__PURE__ */ React.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ React.createElement(
        Paper,
        __spreadProps(__spreadValues({}, others), {
          component: "section",
          role: "dialog",
          tabIndex: -1,
          "aria-modal": true,
          "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
          "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
          onKeyDown: handleKeyDown,
          ref,
          style: [style, transitionStyles],
          className: cx(classes.content, className)
        }),
        others.children
      )))
    );
  }
);

export { ModalBaseContent };
//# sourceMappingURL=ModalBaseContent.js.map
