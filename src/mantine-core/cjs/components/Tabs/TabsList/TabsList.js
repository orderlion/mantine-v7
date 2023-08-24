'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Tabs_context = require('../Tabs.context.js');
var Tabs_module = require('../Tabs.module.css.js');
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
const TabsList = factory.factory((_props, ref) => {
  const props = useProps.useProps("TabsList", defaultProps, _props);
  const _a = props, { children, className, grow, justify, classNames, styles, style } = _a, others = __objRest(_a, ["children", "className", "grow", "justify", "classNames", "styles", "style"]);
  const ctx = Tabs_context.useTabsContext();
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("list", {
      className,
      style,
      classNames,
      styles,
      props,
      variant: ctx.variant
    })), {
      ref,
      role: "tablist",
      variant: ctx.variant,
      mod: {
        grow,
        orientation: ctx.orientation,
        placement: ctx.orientation === "vertical" && ctx.placement,
        inverted: ctx.inverted
      },
      "aria-orientation": ctx.orientation,
      __vars: { "--tabs-justify": justify }
    }),
    children
  );
});
TabsList.classes = Tabs_module['default'];
TabsList.displayName = "@mantine/core/TabsList";

exports.TabsList = TabsList;
//# sourceMappingURL=TabsList.js.map
