'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AppShell_module = require('../AppShell.module.css.js');
var AppShell_context = require('../AppShell.context.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../../core/Box/Box.js');

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
const AppShellFooter = factory.factory((_props, ref) => {
  var _b;
  const props = useProps.useProps("AppShellFooter", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, withBorder, zIndex } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "withBorder", "zIndex"]);
  const ctx = AppShell_context.useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "footer",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("footer", { className, classNames, styles, style })), others), {
      __vars: { "--app-shell-footer-z-index": (_b = zIndex != null ? zIndex : ctx.zIndex) == null ? void 0 : _b.toString() }
    })
  );
});
AppShellFooter.classes = AppShell_module['default'];
AppShellFooter.displayName = "@mantine/core/AppShellFooter";

exports.AppShellFooter = AppShellFooter;
//# sourceMappingURL=AppShellFooter.js.map
