'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Dialog_module = require('./Dialog.module.css.js');
var Affix = require('../Affix/Affix.js');
var Transition = require('../Transition/Transition.js');
var Paper = require('../Paper/Paper.js');
var CloseButton = require('../CloseButton/CloseButton.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const varsResolver = createVarsResolver.createVarsResolver((_, { size }) => ({
  root: {
    "--dialog-size": getSize.getSize(size, "dialog-size")
  }
}));
const Dialog = factory.factory((_props, ref) => {
  const props = useProps.useProps("Dialog", defaultProps, _props);
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
  const getStyles = useStyles.useStyles({
    name: "Dialog",
    classes: Dialog_module['default'],
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
    Affix.Affix,
    {
      zIndex,
      position,
      ref,
      withinPortal,
      portalProps
    },
    /* @__PURE__ */ React__default.createElement(Transition.Transition, __spreadValues({ keepMounted, mounted: opened }, transitionProps), (transitionStyles) => /* @__PURE__ */ React__default.createElement(
      Paper.Paper,
      __spreadValues(__spreadValues({
        unstyled
      }, getStyles("root", { style: transitionStyles })), others),
      withCloseButton && /* @__PURE__ */ React__default.createElement(CloseButton.CloseButton, __spreadValues({ onClick: onClose }, getStyles("closeButton"))),
      children
    ))
  );
});
Dialog.classes = Dialog_module['default'];
Dialog.displayName = "@mantine/core/Dialog";

exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map
