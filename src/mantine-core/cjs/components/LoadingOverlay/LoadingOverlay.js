'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LoadingOverlay_module = require('./LoadingOverlay.module.css.js');
var Transition = require('../Transition/Transition.js');
var Loader = require('../Loader/Loader.js');
var Overlay = require('../Overlay/Overlay.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var getDefaultZIndex = require('../../core/utils/get-default-z-index/get-default-z-index.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');

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
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex.getDefaultZIndex("overlay")
};
const varsResolver = createVarsResolver.createVarsResolver((_, { zIndex }) => ({
  root: {
    "--lo-z-index": zIndex == null ? void 0 : zIndex.toString()
  }
}));
const LoadingOverlay = factory.factory((_props, ref) => {
  const props = useProps.useProps("LoadingOverlay", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    transitionProps,
    loaderProps,
    overlayProps,
    visible,
    zIndex
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "transitionProps",
    "loaderProps",
    "overlayProps",
    "visible",
    "zIndex"
  ]);
  const theme = MantineThemeProvider.useMantineTheme();
  const getStyles = useStyles.useStyles({
    name: "LoadingOverlay",
    classes: LoadingOverlay_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const _overlayProps = __spreadValues(__spreadValues({}, defaultProps.overlayProps), overlayProps);
  return /* @__PURE__ */ React__default.createElement(Transition.Transition, __spreadProps(__spreadValues({ transition: "fade" }, transitionProps), { mounted: !!visible }), (transitionStyles) => /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: transitionStyles })), { ref }), others), /* @__PURE__ */ React__default.createElement(Loader.Loader, __spreadValues(__spreadValues({}, getStyles("loader")), loaderProps)), /* @__PURE__ */ React__default.createElement(
    Overlay.Overlay,
    __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
      "data-light": true,
      unstyled,
      color: (overlayProps == null ? void 0 : overlayProps.color) || theme.white
    })
  ), /* @__PURE__ */ React__default.createElement(
    Overlay.Overlay,
    __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
      "data-dark": true,
      unstyled,
      color: (overlayProps == null ? void 0 : overlayProps.color) || theme.colors.dark[5]
    })
  )));
});
LoadingOverlay.classes = LoadingOverlay_module['default'];
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

exports.LoadingOverlay = LoadingOverlay;
//# sourceMappingURL=LoadingOverlay.js.map
