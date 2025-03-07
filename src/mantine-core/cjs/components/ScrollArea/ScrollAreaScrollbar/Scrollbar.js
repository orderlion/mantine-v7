'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var useResizeObserver = require('../use-resize-observer.js');
var ScrollArea_context = require('../ScrollArea.context.js');
var Scrollbar_context = require('./Scrollbar.context.js');
var composeEventHandlers = require('../utils/compose-event-handlers.js');

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
const Scrollbar = React.forwardRef((props, forwardedRef) => {
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
  const context = ScrollArea_context.useScrollAreaContext();
  const [scrollbar, setScrollbar] = React__default.useState(null);
  const composeRefs = hooks.useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React__default.useRef(null);
  const prevWebkitUserSelectRef = React__default.useRef("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = hooks.useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = hooks.useCallbackRef(onThumbPositionChange);
  const handleResize = hooks.useDebounceCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  React.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver.useResizeObserver(scrollbar, handleResize);
  useResizeObserver.useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ React__default.createElement(
    Scrollbar_context.ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: hooks.useCallbackRef(onThumbChange),
        onThumbPointerUp: hooks.useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: hooks.useCallbackRef(onThumbPointerDown)
      }
    },
    /* @__PURE__ */ React__default.createElement(
      "div",
      __spreadProps(__spreadValues({}, scrollbarProps), {
        ref: composeRefs,
        style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
        onPointerDown: composeEventHandlers.composeEventHandlers(props.onPointerDown, (event) => {
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
        onPointerMove: composeEventHandlers.composeEventHandlers(props.onPointerMove, handleDragScroll),
        onPointerUp: composeEventHandlers.composeEventHandlers(props.onPointerUp, (event) => {
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

exports.Scrollbar = Scrollbar;
//# sourceMappingURL=Scrollbar.js.map
