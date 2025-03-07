'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var StarSymbol = require('../StarSymbol/StarSymbol.js');
var Rating_context = require('../Rating.context.js');
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
function RatingItem(_a) {
  var _b = _a, {
    size,
    getSymbolLabel,
    emptyIcon,
    fullIcon,
    full,
    active,
    value,
    readOnly,
    fractionValue,
    color,
    id,
    onChange,
    style
  } = _b, others = __objRest(_b, [
    "size",
    "getSymbolLabel",
    "emptyIcon",
    "fullIcon",
    "full",
    "active",
    "value",
    "readOnly",
    "fractionValue",
    "color",
    "id",
    "onChange",
    "style"
  ]);
  var _a2;
  const ctx = Rating_context.useRatingContext();
  const _fullIcon = typeof fullIcon === "function" ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === "function" ? emptyIcon(value) : emptyIcon;
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, !readOnly && /* @__PURE__ */ React__default.createElement(
    "input",
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("input")), {
      onKeyDown: (event) => event.key === " " && onChange(value),
      id,
      type: "radio",
      "data-active": active || void 0,
      "aria-label": getSymbolLabel == null ? void 0 : getSymbolLabel(value),
      value,
      onChange
    }), others)
  ), /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues({
      component: readOnly ? "div" : "label"
    }, ctx.getStyles("label")), {
      "data-read-only": readOnly || void 0,
      htmlFor: id,
      onClick: () => onChange(value),
      __vars: {
        "--rating-item-z-index": (_a2 = fractionValue === 1 ? void 0 : active ? 2 : 0) == null ? void 0 : _a2.toString()
      }
    }),
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadProps(__spreadValues({}, ctx.getStyles("symbolBody")), {
        __vars: {
          "--rating-symbol-clip-path": fractionValue === 1 ? void 0 : `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`
        }
      }),
      full ? _fullIcon || /* @__PURE__ */ React__default.createElement(StarSymbol.StarSymbol, { type: "full" }) : _emptyIcon || /* @__PURE__ */ React__default.createElement(StarSymbol.StarSymbol, { type: "empty" })
    )
  ));
}
RatingItem.displayName = "@mantine/core/RatingItem";

exports.RatingItem = RatingItem;
//# sourceMappingURL=RatingItem.js.map
