import React from 'react';
import classes from './Dialog.module.css.js';
import { Affix } from '../Affix/Affix.js';
import { Transition } from '../Transition/Transition.js';
import { Paper } from '../Paper/Paper.js';
import { CloseButton } from '../CloseButton/CloseButton.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useStyles } from '../../core/styles-api/use-styles/use-styles.js';
import { createVarsResolver } from '../../core/styles-api/create-vars-resolver/create-vars-resolver.js';
import { getSize } from '../../core/utils/get-size/get-size.js';

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
  shadow: "md",
  p: "md",
  withBorder: false,
  size: "md",
  transitionProps: { transition: "pop-top-right", duration: 200 },
  position: {
    bottom: 30,
    right: 30
  }
};
const varsResolver = createVarsResolver((_, { size }) => ({
  root: {
    "--dialog-size": getSize(size, "dialog-size")
  }
}));
const Dialog = factory((_props, ref) => {
  const props = useProps("Dialog", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    zIndex,
    position,
    keepMounted,
    opened,
    transitionProps,
    withCloseButton,
    withinPortal,
    children,
    onClose,
    portalProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "zIndex",
    "position",
    "keepMounted",
    "opened",
    "transitionProps",
    "withCloseButton",
    "withinPortal",
    "children",
    "onClose",
    "portalProps"
  ]);
  const getStyles = useStyles({
    name: "Dialog",
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
  return /* @__PURE__ */ React.createElement(
    Affix,
    {
      zIndex,
      position,
      ref,
      withinPortal,
      portalProps
    },
    /* @__PURE__ */ React.createElement(Transition, __spreadValues({ keepMounted, mounted: opened }, transitionProps), (transitionStyles) => /* @__PURE__ */ React.createElement(
      Paper,
      __spreadValues(__spreadValues({
        unstyled
      }, getStyles("root", { style: transitionStyles })), others),
      withCloseButton && /* @__PURE__ */ React.createElement(CloseButton, __spreadValues({ onClick: onClose }, getStyles("closeButton"))),
      children
    ))
  );
});
Dialog.classes = classes;
Dialog.displayName = "@mantine/core/Dialog";

export { Dialog };
//# sourceMappingURL=Dialog.js.map
