import React from 'react';
import { ModalProvider } from './Modal.context.js';
import classes from './Modal.module.css.js';
import { ModalBase } from '../ModalBase/ModalBase.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { getDefaultZIndex } from '../../core/utils/get-default-z-index/get-default-z-index.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getRadius, getSize } from '../../core/utils/get-size/get-size.js';
import { rem } from '../../core/utils/units-converters/rem.js';

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
  __staticSelector: "Modal",
  yOffset: "5dvh",
  xOffset: "5vw",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  transitionProps: { duration: 200, transition: "pop" }
};
const varsResolver = createVarsResolver(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": getRadius(radius),
      "--modal-size": getSize(size, "modal-size"),
      "--modal-y-offset": rem(yOffset),
      "--modal-x-offset": rem(xOffset)
    }
  })
);
const ModalRoot = factory((_props, ref) => {
  const props = useProps("ModalRoot", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "yOffset",
    "scrollAreaComponent",
    "radius",
    "fullScreen",
    "centered",
    "xOffset",
    "__staticSelector"
  ]);
  const getStyles = useStyles({
    name: __staticSelector,
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
  return /* @__PURE__ */ React.createElement(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles } }, /* @__PURE__ */ React.createElement(
    ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles("root")), {
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0
    }), others)
  ));
});
ModalRoot.classes = classes;
ModalRoot.displayName = "@mantine/core/ModalRoot";

export { ModalRoot };
//# sourceMappingURL=ModalRoot.js.map
