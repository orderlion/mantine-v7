import React, { forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context.js';
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
const ScrollAreaViewport = forwardRef(
  (_a, ref) => {
    var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadProps(__spreadValues({}, others), {
        ref: rootRef,
        style: __spreadValues({
          overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
        }, style)
      }),
      /* @__PURE__ */ React.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: ctx.onContentChange }, children)
    );
  }
);
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";

export { ScrollAreaViewport };
//# sourceMappingURL=ScrollAreaViewport.js.map
