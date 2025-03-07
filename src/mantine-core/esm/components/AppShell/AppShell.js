import React from 'react';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar.js';
import { AppShellHeader } from './AppShellHeader/AppShellHeader.js';
import { AppShellFooter } from './AppShellFooter/AppShellFooter.js';
import { AppShellAside } from './AppShellAside/AppShellAside.js';
import { AppShellMain } from './AppShellMain/AppShellMain.js';
import { AppShellSection } from './AppShellSection/AppShellSection.js';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles.js';
import { AppShellProvider } from './AppShell.context.js';
import { useResizing } from './use-resizing/use-resizing.js';
import classes from './AppShell.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
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
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex("app")
};
const varsResolver = createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
const AppShell = factory((_props, ref) => {
  const props = useProps("AppShell", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "navbar",
    "withBorder",
    "padding",
    "transitionDuration",
    "transitionTimingFunction",
    "header",
    "zIndex",
    "layout",
    "disabled",
    "aside",
    "footer"
  ]);
  const getStyles = useStyles({
    name: "AppShell",
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
  const resizing = useResizing({ disabled, transitionDuration });
  return /* @__PURE__ */ React.createElement(AppShellProvider, { value: { getStyles, withBorder, zIndex, disabled } }, /* @__PURE__ */ React.createElement(
    AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { resizing, layout, disabled } }), others)));
});
AppShell.classes = classes;
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;

export { AppShell };
//# sourceMappingURL=AppShell.js.map
