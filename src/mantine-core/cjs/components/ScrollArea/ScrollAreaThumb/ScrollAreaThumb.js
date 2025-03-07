'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Scrollbar_context = require('../ScrollAreaScrollbar/Scrollbar.context.js');
var ScrollArea_context = require('../ScrollArea.context.js');
var composeEventHandlers = require('../utils/compose-event-handlers.js');
var addUnlinkedScrollListener = require('../utils/add-unlinked-scroll-listener.js');

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
const Thumb = React.forwardRef((props, forwardedRef) => {
  const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
  const scrollAreaContext = ScrollArea_context.useScrollAreaContext();
  const scrollbarContext = Scrollbar_context.useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = hooks.useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = React.useRef();
  const debounceScrollEnd = hooks.useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  React.useEffect(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener.addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
    return void 0;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return /* @__PURE__ */ React__default.createElement(
    "div",
    __spreadProps(__spreadValues({
      "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
    }, others), {
      ref: composedRef,
      style: __spreadValues({
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)"
      }, style),
      onPointerDownCapture: composeEventHandlers.composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      }),
      onPointerUp: composeEventHandlers.composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    })
  );
});
const ScrollAreaThumb = React__default.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
    const scrollbarContext = Scrollbar_context.useScrollbarContext();
    if (forceMount || scrollbarContext.hasThumb) {
      return /* @__PURE__ */ React__default.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
    }
    return null;
  }
);

exports.ScrollAreaThumb = ScrollAreaThumb;
exports.Thumb = Thumb;
//# sourceMappingURL=ScrollAreaThumb.js.map
