'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Combobox_context = require('../Combobox.context.js');
var Combobox_module = require('../Combobox.module.css.js');
var Popover = require('../../Popover/Popover.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');

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
const ComboboxDropdown = factory.factory((props, ref) => {
  const _a = useProps.useProps(
    "ComboboxDropdown",
    defaultProps,
    props
  ), { classNames, styles, className, style, hidden } = _a, others = __objRest(_a, ["classNames", "styles", "className", "style", "hidden"]);
  const ctx = Combobox_context.useComboboxContext();
  return /* @__PURE__ */ React__default.createElement(
    Popover.Popover.Dropdown,
    __spreadValues(__spreadProps(__spreadValues({}, others), {
      ref,
      role: "presentation",
      "data-hidden": hidden || void 0
    }), ctx.getStyles("dropdown", { className, style, classNames, styles }))
  );
});
ComboboxDropdown.classes = Combobox_module['default'];
ComboboxDropdown.displayName = "@mantine/core/ComboboxDropdown";

exports.ComboboxDropdown = ComboboxDropdown;
//# sourceMappingURL=ComboboxDropdown.js.map
