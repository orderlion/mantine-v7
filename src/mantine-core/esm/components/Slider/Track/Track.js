import React from 'react';
import { Marks } from '../Marks/Marks.js';
import { useSliderContext } from '../Slider.context.js';
import { Box } from '../../../core/Box/Box.js';

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
function Track(_a) {
  var _b = _a, {
    filled,
    children,
    offset,
    disabled,
    marksOffset,
    inverted,
    containerProps
  } = _b, others = __objRest(_b, [
    "filled",
    "children",
    "offset",
    "disabled",
    "marksOffset",
    "inverted",
    "containerProps"
  ]);
  const { getStyles } = useSliderContext();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("trackContainer")), { mod: { disabled } }), containerProps), /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, getStyles("track")), { mod: { inverted, disabled } }), /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues({
      mod: { inverted, disabled },
      __vars: {
        "--slider-bar-width": `calc(${filled}% + var(--slider-size))`,
        "--slider-bar-offset": `calc(${offset}% - var(--slider-size))`
      }
    }, getStyles("bar"))
  ), children, /* @__PURE__ */ React.createElement(Marks, __spreadProps(__spreadValues({}, others), { offset: marksOffset, disabled, inverted })))));
}
Track.displayName = "@mantine/core/SliderTrack";

export { Track };
//# sourceMappingURL=Track.js.map
