'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var transformSelectData = require('./transform-select-data.js');
var getControlLabel = require('./get-control-label.js');

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
function ConfiguratorSegmentedControl(_a) {
  var _b = _a, {
    data,
    value,
    onChange,
    prop
  } = _b, others = __objRest(_b, [
    "data",
    "value",
    "onChange",
    "prop"
  ]);
  return /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, __spreadValues({ labelElement: "div", label: getControlLabel.getControlLabel(prop) }, others), /* @__PURE__ */ React__default.createElement(
    core.SegmentedControl,
    {
      data: transformSelectData.transformSelectData(data),
      value,
      onChange,
      fullWidth: true,
      transitionDuration: 150
    }
  ));
}

exports.ConfiguratorSegmentedControl = ConfiguratorSegmentedControl;
//# sourceMappingURL=ConfiguratorSegmented.control.js.map
