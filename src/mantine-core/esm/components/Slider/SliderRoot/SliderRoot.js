import React, { forwardRef } from 'react';
import { useSliderContext } from '../Slider.context.js';
import { Box } from '../../../core/Box/Box.js';

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
const SliderRoot = forwardRef(
  (_a, ref) => {
    var _b = _a, { size, disabled, variant, color, thumbSize, radius } = _b, others = __objRest(_b, ["size", "disabled", "variant", "color", "thumbSize", "radius"]);
    const { getStyles } = useSliderContext();
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadValues({
        tabIndex: -1,
        variant,
        size,
        ref
      }, getStyles("root")), others)
    );
  }
);
SliderRoot.displayName = "@mantine/core/SliderRoot";

export { SliderRoot };
//# sourceMappingURL=SliderRoot.js.map
