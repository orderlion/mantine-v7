'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AppShell_context = require('../AppShell.context.js');
var AppShell_module = require('../AppShell.module.css.js');
var polymorphicFactory = require('../../../core/factory/polymorphic-factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../../core/Box/Box.js');

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
const defaultProps = {};
const AppShellSection = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("AppShellSection", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, grow } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "grow"]);
  const ctx = AppShell_context.useAppShellContext();
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { grow }
    }, ctx.getStyles("section", { className, style, classNames, styles })), others)
  );
});
AppShellSection.classes = AppShell_module['default'];
AppShellSection.displayName = "@mantine/core/AppShellSection";

exports.AppShellSection = AppShellSection;
//# sourceMappingURL=AppShellSection.js.map
