'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var InputWrapper_context = require('../InputWrapper.context.js');
var Input_module = require('../Input.module.css.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');

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
  size: "sm",
  labelElement: "label"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getSize.getFontSize(size),
    "--input-asterisk-color": "var(--mantine-color-red-filled)"
  }
}));
const InputLabel = factory.factory((_props, ref) => {
  const props = useProps.useProps("InputLabel", defaultProps, _props);
  const _a = useProps.useProps("InputLabel", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "labelElement",
    "size",
    "required",
    "htmlFor",
    "onMouseDown",
    "children",
    "__staticSelector",
    "variant"
  ]);
  const _getStyles = useStyles.useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: Input_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver
  });
  const ctx = InputWrapper_context.useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("label")), {
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: { required },
      onMouseDown: (event) => {
        onMouseDown == null ? void 0 : onMouseDown(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }
    }), others),
    children,
    required && /* @__PURE__ */ React__default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.classes = Input_module['default'];
InputLabel.displayName = "@mantine/core/InputLabel";

exports.InputLabel = InputLabel;
//# sourceMappingURL=InputLabel.js.map
