'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AppShellNavbar = require('./AppShellNavbar/AppShellNavbar.js');
var AppShellHeader = require('./AppShellHeader/AppShellHeader.js');
var AppShellFooter = require('./AppShellFooter/AppShellFooter.js');
var AppShellAside = require('./AppShellAside/AppShellAside.js');
var AppShellMain = require('./AppShellMain/AppShellMain.js');
var AppShellSection = require('./AppShellSection/AppShellSection.js');
var AppShellMediaStyles = require('./AppShellMediaStyles/AppShellMediaStyles.js');
var AppShell_context = require('./AppShell.context.js');
var useResizing = require('./use-resizing/use-resizing.js');
var AppShell_module = require('./AppShell.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
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
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex.getDefaultZIndex("app")
};
const varsResolver = createVarsResolver.createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
const AppShell = factory.factory((_props, ref) => {
  const props = useProps.useProps("AppShell", defaultProps, _props);
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
  const getStyles = useStyles.useStyles({
    name: "AppShell",
    classes: AppShell_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const resizing = useResizing.useResizing({ disabled, transitionDuration });
  return /* @__PURE__ */ React__default.createElement(AppShell_context.AppShellProvider, { value: { getStyles, withBorder, zIndex, disabled } }, /* @__PURE__ */ React__default.createElement(
    AppShellMediaStyles.AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles("root")), { mod: { resizing, layout, disabled } }), others)));
});
AppShell.classes = AppShell_module['default'];
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = AppShellNavbar.AppShellNavbar;
AppShell.Header = AppShellHeader.AppShellHeader;
AppShell.Main = AppShellMain.AppShellMain;
AppShell.Aside = AppShellAside.AppShellAside;
AppShell.Footer = AppShellFooter.AppShellFooter;
AppShell.Section = AppShellSection.AppShellSection;

exports.AppShell = AppShell;
//# sourceMappingURL=AppShell.js.map
