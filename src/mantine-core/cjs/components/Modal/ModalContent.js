'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Modal_context = require('./Modal.context.js');
var Modal_module = require('./Modal.module.css.js');
var NativeScrollArea = require('../ModalBase/NativeScrollArea.js');
var ModalBaseContent = require('../ModalBase/ModalBaseContent.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var rem = require('../../core/utils/units-converters/rem.js');

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
const defaultProps = {};
const ModalContent = factory.factory((_props, ref) => {
  const props = useProps.useProps("ModalContent", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const ctx = Modal_context.useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea.NativeScrollArea;
  return /* @__PURE__ */ React__default.createElement(
    ModalBaseContent.ModalBaseContent,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("content", { className, style, styles, classNames })), {
      innerProps: ctx.getStyles("inner", { className, style, styles, classNames }),
      ref
    }), others),
    /* @__PURE__ */ React__default.createElement(Scroll, { style: { maxHeight: `calc(100vh - (${rem.rem(ctx.yOffset)} * 2))` } }, children)
  );
});
ModalContent.classes = Modal_module['default'];
ModalContent.displayName = "@mantine/core/ModalContent";

exports.ModalContent = ModalContent;
//# sourceMappingURL=ModalContent.js.map
