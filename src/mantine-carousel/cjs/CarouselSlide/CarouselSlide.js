'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Carousel_context = require('../Carousel.context.js');
var Carousel_module = require('../Carousel.module.css.js');

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
const defaultProps = {};
const CarouselSlide = core.factory((props, ref) => {
  const _a = core.useProps(
    "CarouselSlide",
    defaultProps,
    props
  ), { classNames, className, style, styles, unstyled, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars"]);
  const ctx = Carousel_context.useCarouselContext();
  return /* @__PURE__ */ React__default.createElement(
    core.Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { orientation: ctx.orientation }
    }, ctx.getStyles("slide", { className, style, classNames, styles })), others)
  );
});
CarouselSlide.classes = Carousel_module['default'];
CarouselSlide.displayName = "@mantine/core/CarouselSlide";

exports.CarouselSlide = CarouselSlide;
//# sourceMappingURL=CarouselSlide.js.map
