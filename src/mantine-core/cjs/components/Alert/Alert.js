'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Alert_module = require('./Alert.module.css.js');
var CloseButton = require('../CloseButton/CloseButton.js');
var factory = require('../../core/factory/factory.js');
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
  variant: "light"
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color, variant }) => {
  const colors = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    variant
  });
  return {
    root: {
      "--alert-radius": getSize.getRadius(radius),
      "--alert-bg": colors.background,
      "--alert-color": colors.color,
      "--alert-bd": colors.border
    }
  };
});
const Alert = factory.factory((_props, ref) => {
  const props = useProps.useProps("Alert", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "radius",
    "color",
    "title",
    "children",
    "id",
    "icon",
    "withCloseButton",
    "onClose",
    "closeButtonLabel",
    "variant"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Alert",
    classes: Alert_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const rootId = hooks.useId(id);
  const titleId = title && `${rootId}-title` || void 0;
  const bodyId = `${rootId}-body`;
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      id: rootId
    }, getStyles("root", { variant })), {
      variant,
      ref
    }), others), {
      role: "alert",
      "aria-describedby": bodyId,
      "aria-labelledby": titleId
    }),
    /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("wrapper")), icon && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("icon")), icon), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, getStyles("title")), { "data-with-close-button": withCloseButton || void 0 }), /* @__PURE__ */ React__default.createElement("span", __spreadValues({ id: titleId }, getStyles("label")), title)), /* @__PURE__ */ React__default.createElement("div", __spreadValues({ id: bodyId }, getStyles("message")), children)), withCloseButton && /* @__PURE__ */ React__default.createElement(
      CloseButton.CloseButton,
      __spreadProps(__spreadValues({}, getStyles("closeButton")), {
        onClick: onClose,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": closeButtonLabel
      })
    ))
  );
});
Alert.classes = Alert_module['default'];
Alert.displayName = "@mantine/core/Alert";

exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map
