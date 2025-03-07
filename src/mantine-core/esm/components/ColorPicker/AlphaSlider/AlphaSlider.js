import React, { forwardRef } from 'react';
import { ColorSlider } from '../ColorSlider/ColorSlider.js';
import { round } from '../converters/parsers.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { rem } from '../../../core/utils/units-converters/rem.js';

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
const AlphaSlider = forwardRef((props, ref) => {
  const _a = useProps(
    "AlphaSlider",
    defaultProps,
    props
  ), { value, onChange, onChangeEnd, color } = _a, others = __objRest(_a, ["value", "onChange", "onChangeEnd", "color"]);
  return /* @__PURE__ */ React.createElement(
    ColorSlider,
    __spreadProps(__spreadValues({}, others), {
      ref,
      value,
      onChange: (val) => onChange == null ? void 0 : onChange(round(val, 2)),
      onChangeEnd: (val) => onChangeEnd == null ? void 0 : onChangeEnd(round(val, 2)),
      maxValue: 1,
      round: false,
      "data-alpha": true,
      overlays: [
        {
          backgroundImage: "linear-gradient(45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--_slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--_slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--_slider-checkers) 75%)",
          backgroundSize: `${rem(8)} ${rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} -${rem(4)}, -${rem(4)} 0`
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4
          )} inset`
        }
      ]
    })
  );
});
AlphaSlider.displayName = "@mantine/core/AlphaSlider";

export { AlphaSlider };
//# sourceMappingURL=AlphaSlider.js.map
