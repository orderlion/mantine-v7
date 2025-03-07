'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Blockquote_module = require('./Blockquote.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var parseThemeColor = require('../../core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.js');
var rgba = require('../../core/MantineProvider/color-functions/rgba/rgba.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');
var rem = require('../../core/utils/units-converters/rem.js');
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
  iconSize: 48
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { color, iconSize, radius }) => {
  const darkParsed = parseThemeColor.parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "dark"
  });
  const lightParsed = parseThemeColor.parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "light"
  });
  return {
    root: {
      "--bq-bg-light": rgba.rgba(lightParsed.value, 0.07),
      "--bq-bg-dark": rgba.rgba(darkParsed.value, 0.06),
      "--bq-bd": getThemeColor.getThemeColor(color, theme),
      "--bq-icon-size": rem.rem(iconSize),
      "--bq-radius": getSize.getRadius(radius)
    }
  };
});
const Blockquote = factory.factory((_props, ref) => {
  const props = useProps.useProps("Blockquote", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    icon,
    iconSize,
    cite
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "icon",
    "iconSize",
    "cite"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Blockquote",
    classes: Blockquote_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ component: "blockquote", ref }, getStyles("root")), others), icon && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("icon")), icon), children, cite && /* @__PURE__ */ React__default.createElement("cite", __spreadValues({}, getStyles("cite")), cite));
});
Blockquote.classes = Blockquote_module['default'];
Blockquote.displayName = "@mantine/core/Blockquote";

exports.Blockquote = Blockquote;
//# sourceMappingURL=Blockquote.js.map
