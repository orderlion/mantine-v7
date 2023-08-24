'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var PillsInput_context = require('../PillsInput.context.js');
var PillsInput_module = require('../PillsInput.module.css.js');
var InputWrapper_context = require('../../Input/InputWrapper.context.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');

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
  type: "visible"
};
const PillsInputField = factory.factory((_props, ref) => {
  const props = useProps.useProps("PillsInputField", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    type,
    disabled,
    id,
    pointer
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "type",
    "disabled",
    "id",
    "pointer"
  ]);
  const ctx = PillsInput_context.usePillsInputContext();
  const inputWrapperCtx = InputWrapper_context.useInputWrapperContext();
  const getStyles = useStyles.useStyles({
    name: "PillsInputField",
    classes: PillsInput_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "field"
  });
  const _disabled = disabled || (ctx == null ? void 0 : ctx.disabled);
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadValues({
      component: "input",
      ref: hooks.useMergedRef(ref, ctx == null ? void 0 : ctx.fieldRef),
      "data-type": type,
      disabled: _disabled,
      mod: { disabled: _disabled, pointer }
    }, getStyles("field")), others), {
      id: (inputWrapperCtx == null ? void 0 : inputWrapperCtx.inputId) || id,
      "aria-invalid": ctx == null ? void 0 : ctx.hasError,
      "aria-describedby": inputWrapperCtx == null ? void 0 : inputWrapperCtx.describedBy
    })
  );
});
PillsInputField.classes = PillsInput_module['default'];
PillsInputField.displayName = "@mantine/core/PillsInputField";

exports.PillsInputField = PillsInputField;
//# sourceMappingURL=PillsInputField.js.map
