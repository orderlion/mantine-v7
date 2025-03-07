import React, { forwardRef, useRef, useEffect } from 'react';
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
const ScrollAreaScrollbarY = forwardRef(
  (props, forwardedRef) => {
    const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = React.useState();
    const ref = useRef(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarYChange);
    useEffect(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return /* @__PURE__ */ React.createElement(
      Scrollbar,
      __spreadProps(__spreadValues({}, others), {
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: __spreadValues({
          ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`
        }, style),
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      })
    );
  }
);

export { ScrollAreaScrollbarY };
//# sourceMappingURL=ScrollbarY.js.map
