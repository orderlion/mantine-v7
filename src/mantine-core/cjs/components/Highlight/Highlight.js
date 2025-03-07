'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var highlighter = require('./highlighter/highlighter.js');
var Text = require('../Text/Text.js');
var Mark = require('../Mark/Mark.js');
var polymorphicFactory = require('../../core/factory/polymorphic-factory.js');
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
const defaultProps = {};
const Highlight = polymorphicFactory.polymorphicFactory((props, ref) => {
  const _a = useProps.useProps(
    "Highlight",
    defaultProps,
    props
  ), { unstyled, children, highlight, highlightStyles, color } = _a, others = __objRest(_a, ["unstyled", "children", "highlight", "highlightStyles", "color"]);
  const highlightChunks = highlighter.highlighter(children, highlight);
  return /* @__PURE__ */ React__default.createElement(Text.Text, __spreadProps(__spreadValues({ unstyled, ref }, others), { __staticSelector: "Highlight" }), highlightChunks.map(
    ({ chunk, highlighted }, i) => highlighted ? /* @__PURE__ */ React__default.createElement(
      Mark.Mark,
      {
        unstyled,
        key: i,
        color,
        style: highlightStyles,
        "data-highlight": chunk
      },
      chunk
    ) : /* @__PURE__ */ React__default.createElement("span", { key: i }, chunk)
  ));
});
Highlight.classes = Text.Text.classes;
Highlight.displayName = "@mantine/core/Highlight";

exports.Highlight = Highlight;
//# sourceMappingURL=Highlight.js.map
