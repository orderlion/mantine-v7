'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getControlLabel = require('./get-control-label.js');
var transformSelectData = require('./transform-select-data.js');

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
function ConfiguratorSelectControl(_a) {
  var _b = _a, {
    value,
    onChange,
    prop,
    data
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "prop",
    "data"
  ]);
  return /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    __spreadValues({
      value,
      onChange: (event) => onChange(event.currentTarget.value),
      label: getControlLabel.getControlLabel(prop),
      placeholder: "Enter prop value",
      data: transformSelectData.transformSelectData(data)
    }, others)
  );
}

exports.ConfiguratorSelectControl = ConfiguratorSelectControl;
//# sourceMappingURL=ConfiguratorSelect.control.js.map
