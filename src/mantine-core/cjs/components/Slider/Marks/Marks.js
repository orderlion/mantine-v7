'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var getPosition = require('../utils/get-position/get-position.js');
var isMarkFilled = require('./is-mark-filled.js');
var Slider_context = require('../Slider.context.js');
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
function Marks({ marks, min, max, disabled, value, offset, inverted }) {
  const { getStyles } = Slider_context.useSliderContext();
  if (!marks) {
    return null;
  }
  const items = marks.map((mark, index) => /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues({}, getStyles("markWrapper")), {
      __vars: { "--mark-offset": `${getPosition.getPosition({ value: mark.value, min, max })}%` },
      key: index
    }),
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadProps(__spreadValues({}, getStyles("mark")), {
        mod: { filled: isMarkFilled.isMarkFilled({ mark, value, offset, inverted }), disabled }
      })
    ),
    mark.label && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("markLabel")), mark.label)
  ));
  return /* @__PURE__ */ React__default.createElement("div", null, items);
}
Marks.displayName = "@mantine/core/SliderMarks";

exports.Marks = Marks;
//# sourceMappingURL=Marks.js.map
