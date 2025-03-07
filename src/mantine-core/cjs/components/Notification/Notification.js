'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Notification_module = require('./Notification.module.css.js');
var Loader = require('../Loader/Loader.js');
var Text = require('../Text/Text.js');
var CloseButton = require('../CloseButton/CloseButton.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
  withCloseButton: true
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color }) => ({
  root: {
    "--notification-radius": getSize.getRadius(radius),
    "--notification-color": getThemeColor.getThemeColor(color, theme)
  }
}));
const Notification = factory.factory((_props, ref) => {
  const props = useProps.useProps("Notification", defaultProps, _props);
  const _a = props, {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "radius",
    "loading",
    "withCloseButton",
    "withBorder",
    "title",
    "icon",
    "children",
    "onClose",
    "closeButtonProps",
    "classNames",
    "style",
    "styles",
    "unstyled",
    "variant",
    "vars"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Notification",
    classes: Notification_module['default'],
    props,
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
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      mod: {
        "data-with-icon": !!icon || loading,
        "data-with-border": withBorder
      },
      ref,
      variant
    }), others), {
      role: "alert"
    }),
    icon && !loading && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("icon")), icon),
    loading && /* @__PURE__ */ React__default.createElement(Loader.Loader, __spreadValues({ size: 28, color }, getStyles("loader"))),
    /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("body")), title && /* @__PURE__ */ React__default.createElement(Text.Text, __spreadProps(__spreadValues({}, getStyles("title")), { size: "sm", fw: 500 }), title), /* @__PURE__ */ React__default.createElement(Text.Text, __spreadProps(__spreadValues({}, getStyles("description")), { mod: { "data-with-title": !!title }, size: "sm" }), children)),
    withCloseButton && /* @__PURE__ */ React__default.createElement(
      CloseButton.CloseButton,
      __spreadValues(__spreadProps(__spreadValues({
        iconSize: 16,
        color: "gray"
      }, closeButtonProps), {
        onClick: onClose
      }), getStyles("closeButton"))
    )
  );
});
Notification.classes = Notification_module['default'];
Notification.displayName = "@mantine/core/Notification";

exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
