'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ColorSlider = require('../ColorSlider/ColorSlider.js');
var parsers = require('../converters/parsers.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
const defaultProps = {};
const AlphaSlider = React.forwardRef((props, ref) => {
  const _a = useProps.useProps(
    "AlphaSlider",
    defaultProps,
    props
  ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
  return /* @__PURE__ */ React__default.createElement(
    ColorSlider.ColorSlider,
    __spreadProps(__spreadValues({}, others), {
      ref,
      value,
      onChange: (val) => onChange == null ? void 0 : onChange(parsers.round(val, 2)),
      onChangeEnd: (val) => onChangeEnd == null ? void 0 : onChangeEnd(parsers.round(val, 2)),
      maxValue: 1,
      round: false,
      "data-alpha": true,
      overlays: [
        {
          backgroundImage: "linear-gradient(45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--_slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--_slider-checkers) 75%)",
          backgroundSize: `${rem.rem(8)} ${rem.rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem.rem(4)}, ${rem.rem(4)} -${rem.rem(4)}, -${rem.rem(4)} 0`
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem.rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem.rem(
            4
          )} inset`
        }
      ]
    })
  );
});
AlphaSlider.displayName = "@mantine/core/AlphaSlider";

exports.AlphaSlider = AlphaSlider;
//# sourceMappingURL=AlphaSlider.js.map
