'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useModalTransition = require('./use-modal-transition.js');
var ModalBase_context = require('./ModalBase.context.js');
var Transition = require('../Transition/Transition.js');
var Overlay = require('../Overlay/Overlay.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const ModalBaseOverlay = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
    const ctx = ModalBase_context.useModalBaseContext();
    const transition = useModalTransition.useModalTransition(transitionProps);
    return /* @__PURE__ */ React__default.createElement(Transition.Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ React__default.createElement(
      Overlay.Overlay,
      __spreadValues({
        ref,
        fixed: true,
        style: [style, transitionStyles],
        zIndex: ctx.zIndex,
        radius: 0,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          ctx.closeOnClickOutside && ctx.onClose();
        }
      }, others)
    ));
  }
);
ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";

exports.ModalBaseOverlay = ModalBaseOverlay;
//# sourceMappingURL=ModalBaseOverlay.js.map
