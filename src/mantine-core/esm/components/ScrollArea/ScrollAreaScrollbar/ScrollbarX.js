import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Scrollbar } from './Scrollbar.js';
import { useScrollAreaContext } from '../ScrollArea.context.js';
import { getThumbSize } from '../utils/get-thumb-size.js';
import { isScrollingWithinScrollbarBounds } from '../utils/is-scrolling-within-scrollbar-bounds.js';
import { toInt } from '../utils/to-int.js';

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
const ScrollAreaScrollbarX = forwardRef(
  (props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = useState();
    const ref = useRef(null);
    const composeRefs = useMergedRef(forwardedRef, ref, ctx.onScrollbarXChange);
    useEffect(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ React.createElement(
      Scrollbar,
      __spreadProps(__spreadValues({
        "data-orientation": "horizontal"
      }, others), {
        ref: composeRefs,
        sizes,
        style: __spreadProps(__spreadValues({}, style), {
          ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
        }),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      })
    );
  }
);

export { ScrollAreaScrollbarX };
//# sourceMappingURL=ScrollbarX.js.map
