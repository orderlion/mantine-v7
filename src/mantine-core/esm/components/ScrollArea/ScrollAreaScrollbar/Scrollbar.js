import React, { forwardRef, useEffect } from 'react';
import { useMergedRef, useCallbackRef, useDebounceCallback } from '@mantine/hooks';
import { useResizeObserver } from '../use-resize-observer.js';
import { useScrollAreaContext } from '../ScrollArea.context.js';
import { ScrollbarProvider } from './Scrollbar.context.js';
import { composeEventHandlers } from '../utils/compose-event-handlers.js';

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
const Scrollbar = forwardRef((props, forwardedRef) => {
  const _a = props, {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize
  } = _a, scrollbarProps = __objRest(_a, [
    "sizes",
    "hasThumb",
    "onThumbChange",
    "onThumbPointerUp",
    "onThumbPointerDown",
    "onThumbPositionChange",
    "onDragScroll",
    "onWheelScroll",
    "onResize"
  ]);
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = React.useState(null);
  const composeRefs = useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React.useRef(null);
  const prevWebkitUserSelectRef = React.useRef("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ React.createElement(
    ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown)
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      __spreadProps(__spreadValues({}, scrollbarProps), {
        ref: composeRefs,
        style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const mainPointer = 0;
          if (event.button === mainPointer) {
            const element = event.target;
            element.setPointerCapture(event.pointerId);
            rectRef.current = scrollbar.getBoundingClientRect();
            prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
            document.body.style.webkitUserSelect = "none";
            handleDragScroll(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const element = event.target;
          if (element.hasPointerCapture(event.pointerId)) {
            element.releasePointerCapture(event.pointerId);
          }
          document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
          rectRef.current = null;
        })
      })
    )
  );
});

export { Scrollbar };
//# sourceMappingURL=Scrollbar.js.map
