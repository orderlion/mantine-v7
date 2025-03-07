'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useInputProps = require('../Input/use-input-props.js');
var Input = require('../Input/Input.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');

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
  __staticSelector: "InputBase",
  withAria: true
};
const InputBase = polymorphicFactory.polymorphicFactory((props, ref) => {
  const _a = useInputProps.useInputProps("InputBase", defaultProps, props), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ React__default.createElement(Input.Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React__default.createElement(Input.Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.classes = __spreadValues(__spreadValues({}, Input.Input.classes), Input.Input.Wrapper.classes);
InputBase.displayName = "@mantine/core/InputBase";

exports.InputBase = InputBase;
//# sourceMappingURL=InputBase.js.map
