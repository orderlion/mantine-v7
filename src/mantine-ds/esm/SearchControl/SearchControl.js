import React from 'react';
import cx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { UnstyledButton, Group, rem, Text } from '@mantine/core';
import classes from './SearchControl.module.css.js';

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
function SearchControl(_a) {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadProps(__spreadValues({}, others), { className: cx(classes.root, className) }), /* @__PURE__ */ React.createElement(Group, { gap: "xs" }, /* @__PURE__ */ React.createElement(IconSearch, { style: { width: rem(15), height: rem(15) }, stroke: 1.5 }), /* @__PURE__ */ React.createElement(Text, { fz: "sm", c: "dimmed", pr: 80 }, "Search"), /* @__PURE__ */ React.createElement(Text, { fw: 700, className: classes.shortcut }, "Ctrl + K")));
}

export { SearchControl };
//# sourceMappingURL=SearchControl.js.map
