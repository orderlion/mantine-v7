'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ActionIconGroup = require('./ActionIconGroup/ActionIconGroup.js');
var ActionIcon_module = require('./ActionIcon.module.css.js');
var UnstyledButton = require('../UnstyledButton/UnstyledButton.js');
var Loader = require('../Loader/Loader.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
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
  variant: "filled",
  size: "md"
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant
    });
    return {
      root: {
        "--ai-size": getSize.getSize(size, "ai-size"),
        "--ai-radius": getSize.getRadius(radius),
        "--ai-bg": colors.background,
        "--ai-hover": colors.hover,
        "--ai-color": colors.color,
        "--ai-bd": colors.border
      }
    };
  }
);
const ActionIcon = polymorphicFactory.polymorphicFactory((_props, ref) => {
  const props = useProps.useProps("ActionIcon", defaultProps, _props);
  const _a = props, {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest(_a, [
    "className",
    "unstyled",
    "variant",
    "classNames",
    "styles",
    "style",
    "loading",
    "loaderProps",
    "size",
    "color",
    "radius",
    "__staticSelector",
    "gradient",
    "vars",
    "children",
    "disabled",
    "data-disabled"
  ]);
  const getStyles = useStyles.useStyles({
    name: ["ActionIcon", __staticSelector],
    props,
    className,
    style,
    classes: ActionIcon_module['default'],
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    UnstyledButton.UnstyledButton,
    __spreadProps(__spreadValues(__spreadValues({}, getStyles("root", { active: !disabled && !loading && !dataDisabled })), others), {
      unstyled,
      variant,
      size,
      disabled: disabled || loading,
      ref,
      mod: { loading, disabled: disabled || dataDisabled }
    }),
    loading ? /* @__PURE__ */ React__default.createElement(
      Loader.Loader,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("loader")), {
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)"
      }), loaderProps)
    ) : children
  );
});
ActionIcon.classes = ActionIcon_module['default'];
ActionIcon.displayName = "@mantine/core/ActionIcon";
ActionIcon.Group = ActionIconGroup.ActionIconGroup;

exports.ActionIcon = ActionIcon;
//# sourceMappingURL=ActionIcon.js.map
