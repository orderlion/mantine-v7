import React from 'react';
import classes from './LoadingOverlay.module.css.js';
import { Transition } from '../Transition/Transition.js';
import { Loader } from '../Loader/Loader.js';
import { Overlay } from '../Overlay/Overlay.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { Box } from '../../core/Box/Box.js';
import { getDefaultZIndex } from '../../core/utils/get-default-z-index/get-default-z-index.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';

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
  zIndex: getDefaultZIndex("overlay")
};
const varsResolver = createVarsResolver((_, { zIndex }) => ({
  root: {
    "--lo-z-index": zIndex == null ? void 0 : zIndex.toString()
  }
}));
const LoadingOverlay = factory((_props, ref) => {
  const props = useProps("LoadingOverlay", defaultProps, _props);
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
  const theme = useMantineTheme();
  const getStyles = useStyles({
    name: "LoadingOverlay",
    classes,
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
  return /* @__PURE__ */ React.createElement(Transition, __spreadProps(__spreadValues({ transition: "fade" }, transitionProps), { mounted: !!visible }), (transitionStyles) => /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: transitionStyles })), { ref }), others), /* @__PURE__ */ React.createElement(Loader, __spreadValues(__spreadValues({}, getStyles("loader")), loaderProps)), /* @__PURE__ */ React.createElement(
    Overlay,
    __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
      "data-light": true,
      unstyled,
      color: (overlayProps == null ? void 0 : overlayProps.color) || theme.white
    })
  ), /* @__PURE__ */ React.createElement(
    Overlay,
    __spreadProps(__spreadValues(__spreadValues({}, _overlayProps), getStyles("overlay")), {
      "data-dark": true,
      unstyled,
      color: (overlayProps == null ? void 0 : overlayProps.color) || theme.colors.dark[5]
    })
  )));
});
LoadingOverlay.classes = classes;
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

export { LoadingOverlay };
//# sourceMappingURL=LoadingOverlay.js.map
