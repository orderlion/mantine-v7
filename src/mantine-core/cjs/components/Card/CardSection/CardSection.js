'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Card_context = require('../Card.context.js');
var Card_module = require('../Card.module.css.js');
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
const CardSection = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("CardSection", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    inheritPadding
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "withBorder",
    "inheritPadding"
  ]);
  const ctx = Card_context.useCardContext();
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { "with-border": withBorder, "inherit-padding": inheritPadding }
    }, ctx.getStyles("section", { className, style, styles, classNames })), others)
  );
});
CardSection.classes = Card_module['default'];
CardSection.displayName = "@mantine/core/CardSection";

exports.CardSection = CardSection;
//# sourceMappingURL=CardSection.js.map
