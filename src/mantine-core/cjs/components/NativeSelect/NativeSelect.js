'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var NativeSelectOption = require('./NativeSelectOption.js');
var getParsedComboboxData = require('../Combobox/get-parsed-combobox-data/get-parsed-combobox-data.js');
var InputBase = require('../InputBase/InputBase.js');
var ComboboxChevron = require('../Combobox/ComboboxChevron/ComboboxChevron.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');

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
  rightSectionPointerEvents: "none"
};
const NativeSelect = factory.factory((props, ref) => {
  const _a = useProps.useProps(
    "NativeSelect",
    defaultProps,
    props
  ), { data, children, size, error, rightSection } = _a, others = __objRest(_a, ["data", "children", "size", "error", "rightSection"]);
  const options = getParsedComboboxData.getParsedComboboxData(data).map((item, index) => /* @__PURE__ */ React__default.createElement(NativeSelectOption.NativeSelectOption, { key: index, data: item }));
  return /* @__PURE__ */ React__default.createElement(
    InputBase.InputBase,
    __spreadProps(__spreadValues({
      component: "select",
      ref
    }, others), {
      __staticSelector: "NativeSelect",
      size,
      pointer: true,
      error,
      rightSection: rightSection || /* @__PURE__ */ React__default.createElement(ComboboxChevron.ComboboxChevron, { size, error })
    }),
    children || options
  );
});
NativeSelect.classes = InputBase.InputBase.classes;
NativeSelect.displayName = "@mantine/core/NativeSelect";

exports.NativeSelect = NativeSelect;
//# sourceMappingURL=NativeSelect.js.map
