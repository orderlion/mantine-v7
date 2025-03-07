'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var ScrollArea_context = require('../ScrollArea.context.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
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
const defaultProps = {
  scrollHideDelay: 1e3,
  type: "hover"
};
const ScrollAreaRoot = React.forwardRef((_props, ref) => {
  const props = useProps.useProps("ScrollAreaRoot", defaultProps, _props);
  const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
  const [scrollArea, setScrollArea] = React.useState(null);
  const [viewport, setViewport] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const [scrollbarX, setScrollbarX] = React.useState(null);
  const [scrollbarY, setScrollbarY] = React.useState(null);
  const [cornerWidth, setCornerWidth] = React.useState(0);
  const [cornerHeight, setCornerHeight] = React.useState(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = React.useState(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = React.useState(false);
  const rootRef = hooks.useMergedRef(ref, (node) => setScrollArea(node));
  return /* @__PURE__ */ React__default.createElement(
    ScrollArea_context.ScrollAreaProvider,
    {
      value: {
        type,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
      }
    },
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadProps(__spreadValues({}, others), {
        ref: rootRef,
        __vars: {
          "--sa-corner-width": `${cornerWidth}px`,
          "--sa-corner-height": `${cornerHeight}px`
        }
      })
    )
  );
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";

exports.ScrollAreaRoot = ScrollAreaRoot;
//# sourceMappingURL=ScrollAreaRoot.js.map
