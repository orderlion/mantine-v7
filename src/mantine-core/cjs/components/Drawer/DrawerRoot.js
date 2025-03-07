'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Drawer_context = require('./Drawer.context.js');
var Drawer_module = require('./Drawer.module.css.js');
var ModalBase = require('../ModalBase/ModalBase.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var getDefaultZIndex = require('../../core/utils/get-default-z-index/get-default-z-index.js');
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
const transitions = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left"
};
const defaultProps = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex.getDefaultZIndex("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  position: "left"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { position, size }) => ({
  root: {
    "--drawer-size": getSize.getSize(size, "drawer-size"),
    "--drawer-flex": position === "left" || position === "right" ? "0 0 var(--drawer-size)" : "0 0 100%",
    "--drawer-height": position === "left" || position === "right" ? "100%" : "var(--drawer-size)",
    "--drawer-align": position === "bottom" ? "flex-end" : "flex-start",
    "--drawer-justify": position === "right" ? "flex-end" : "flex-start"
  }
}));
const DrawerRoot = factory.factory((_props, ref) => {
  const props = useProps.useProps("DrawerRoot", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollAreaComponent,
    position,
    transitionProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "scrollAreaComponent",
    "position",
    "transitionProps"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Drawer",
    classes: Drawer_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(Drawer_context.DrawerProvider, { value: { scrollAreaComponent, getStyles } }, /* @__PURE__ */ React__default.createElement(
    ModalBase.ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root")), {
      transitionProps: __spreadValues({ transition: transitions[position] }, transitionProps)
    }), others)
  ));
});
DrawerRoot.classes = Drawer_module['default'];
DrawerRoot.displayName = "@mantine/core/DrawerRoot";

exports.DrawerRoot = DrawerRoot;
//# sourceMappingURL=DrawerRoot.js.map
