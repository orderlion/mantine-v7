'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PillGroup = require('./PillGroup/PillGroup.js');
var PillGroup_context = require('./PillGroup.context.js');
var PillsInput_context = require('../PillsInput/PillsInput.context.js');
var Pill_module = require('./Pill.module.css.js');
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
  radius: "xl",
  variant: "default"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { radius }, { size }) => ({
  root: {
    "--pill-fz": getSize.getSize(size, "pill-fz"),
    "--pill-height": getSize.getSize(size, "pill-height"),
    "--pill-radius": getSize.getRadius(radius)
  }
}));
const Pill = factory.factory((_props, ref) => {
  const props = useProps.useProps("Pill", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    size,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "variant",
    "children",
    "withRemoveButton",
    "onRemove",
    "removeButtonProps",
    "radius",
    "size",
    "disabled"
  ]);
  const ctx = PillGroup_context.usePillGroupContext();
  const pillsInputCtx = PillsInput_context.usePillsInputContext();
  const _size = size || (ctx == null ? void 0 : ctx.size) || "sm";
  const _variant = (pillsInputCtx == null ? void 0 : pillsInputCtx.variant) === "filled" ? "contrast" : variant || "default";
  const getStyles = useStyles.useStyles({
    name: "Pill",
    classes: Pill_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    stylesCtx: { size: _size }
  });
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "span",
      ref,
      variant: _variant,
      size: _size
    }, getStyles("root", { variant: _variant })), {
      mod: { "with-remove": withRemoveButton, disabled: disabled || (ctx == null ? void 0 : ctx.disabled) }
    }), others),
    /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, getStyles("label")), children),
    withRemoveButton && /* @__PURE__ */ React__default.createElement(
      CloseButton.CloseButton,
      __spreadProps(__spreadValues(__spreadValues({
        iconSize: "70%",
        variant: "transparent",
        radius,
        tabIndex: -1,
        "aria-hidden": true
      }, removeButtonProps), getStyles("remove", {
        className: removeButtonProps == null ? void 0 : removeButtonProps.className,
        style: removeButtonProps == null ? void 0 : removeButtonProps.style
      })), {
        onMouseDown: (event) => {
          var _a2;
          event.preventDefault();
          event.stopPropagation();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onMouseDown) == null ? void 0 : _a2.call(removeButtonProps, event);
        },
        onClick: (event) => {
          var _a2;
          event.stopPropagation();
          onRemove == null ? void 0 : onRemove();
          (_a2 = removeButtonProps == null ? void 0 : removeButtonProps.onClick) == null ? void 0 : _a2.call(removeButtonProps, event);
        }
      })
    )
  );
});
Pill.classes = Pill_module['default'];
Pill.displayName = "@mantine/core/Pill";
Pill.Group = PillGroup.PillGroup;

exports.Pill = Pill;
//# sourceMappingURL=Pill.js.map
