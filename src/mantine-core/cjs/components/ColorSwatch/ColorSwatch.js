'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ColorSwatch_module = require('./ColorSwatch.module.css.js');
var rem = require('../../core/utils/units-converters/rem.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

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
const defaultProps = {
  size: rem.rem(28),
  radius: rem.rem(28),
  withShadow: true
};
const varsResolver = createVarsResolver.createVarsResolver((_, { radius, size }) => ({
  root: {
    "--cs-radius": getSize.getRadius(radius),
    "--cs-size": rem.rem(size)
  }
}));
const ColorSwatch = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("ColorSwatch", defaultProps, _props);
  const _a = useProps.useProps("ColorSwatch", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    size,
    radius,
    withShadow,
    children,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "size",
    "radius",
    "withShadow",
    "children",
    "variant"
  ]);
  const getStyles = useStyles.useStyles({
    name: "ColorSwatch",
    props,
    classes: ColorSwatch_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadValues({
      ref,
      variant,
      size
    }, getStyles("root", { focusable: true })), others),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("alphaOverlay"))),
    withShadow && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("shadowOverlay"))),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("colorOverlay", { style: { backgroundColor: color } }))),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("childrenOverlay")), children)
  );
});
ColorSwatch.classes = ColorSwatch_module['default'];
ColorSwatch.displayName = "@mantine/core/ColorSwatch";

exports.ColorSwatch = ColorSwatch;
//# sourceMappingURL=ColorSwatch.js.map
