'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ButtonGroup = require('./ButtonGroup/ButtonGroup.js');
var Button_module = require('./Button.module.css.js');
var UnstyledButton = require('../UnstyledButton/UnstyledButton.js');
var Loader = require('../Loader/Loader.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
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
  size: "sm",
  variant: "filled"
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize.getSize(size, "button-height"),
        "--button-padding-x": getSize.getSize(size, "button-padding-x"),
        "--button-fz": (size == null ? void 0 : size.includes("compact")) ? getSize.getFontSize(size.replace("compact-", "")) : getSize.getFontSize(size),
        "--button-radius": getSize.getRadius(radius),
        "--button-bg": colors.background,
        "--button-hover": colors.hover,
        "--button-color": colors.color,
        "--button-bd": colors.border
      }
    };
  }
);
const Button = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("Button", defaultProps, _props);
  const _a = props, {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest(_a, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Button",
    props,
    classes: Button_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ React__default.createElement(
    UnstyledButton.UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root", { active: !disabled && !loading && !dataDisabled })), {
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: {
        disabled: disabled || dataDisabled,
        loading,
        block: fullWidth,
        "with-left-section": hasLeftSection,
        "with-right-section": hasRightSection
      }
    }), others),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("inner")), leftSection && /* @__PURE__ */ React__default.createElement(Box.Box, __spreadProps(__spreadValues({ component: "span" }, getStyles("section")), { mod: { position: "left" } }), leftSection), loading && /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({ component: "span" }, getStyles("loader")), /* @__PURE__ */ React__default.createElement(
      Loader.Loader,
      __spreadValues({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({ component: "span", mod: { loading } }, getStyles("label")), children), rightSection && /* @__PURE__ */ React__default.createElement(Box.Box, __spreadProps(__spreadValues({ component: "span" }, getStyles("section")), { mod: { position: "right" } }), rightSection))
  );
});
Button.classes = Button_module['default'];
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup.ButtonGroup;

exports.Button = Button;
//# sourceMappingURL=Button.js.map
