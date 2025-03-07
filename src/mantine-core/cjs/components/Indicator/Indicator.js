'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var getPositionVariables = require('./get-position-variables/get-position-variables.js');
var Indicator_module = require('./Indicator.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var rem = require('../../core/utils/units-converters/rem.js');
var getSize = require('../../core/utils/get-size/get-size.js');

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
const defaultProps = {
  position: "top-end",
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  processing: false,
  size: 10
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { color, position, offset, size, radius, zIndex }) => ({
    root: __spreadValues({
      "--indicator-color": getThemeColor.getThemeColor(color, theme),
      "--indicator-size": rem.rem(size),
      "--indicator-radius": typeof radius !== "undefined" ? getSize.getRadius(radius) : void 0,
      "--indicator-z-index": zIndex == null ? void 0 : zIndex.toString()
    }, getPositionVariables.getPositionVariables(position, offset))
  })
);
const Indicator = factory.factory((_props, ref) => {
  const props = useProps.useProps("Indicator", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    position,
    offset,
    inline,
    label,
    radius,
    color,
    withBorder,
    disabled,
    processing,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "position",
    "offset",
    "inline",
    "label",
    "radius",
    "color",
    "withBorder",
    "disabled",
    "processing",
    "zIndex"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Indicator",
    classes: Indicator_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { inline } }), others), !disabled && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues({
      mod: { "with-label": !!label, "with-border": withBorder, processing }
    }, getStyles("indicator")),
    label
  )), children);
});
Indicator.classes = Indicator_module['default'];
Indicator.displayName = "@mantine/core/Indicator";

exports.Indicator = Indicator;
//# sourceMappingURL=Indicator.js.map
