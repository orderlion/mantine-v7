'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ScrollAreaScrollbar = require('./ScrollAreaScrollbar/ScrollAreaScrollbar.js');
var ScrollAreaCorner = require('./ScrollAreaCorner/ScrollAreaCorner.js');
var ScrollAreaRoot = require('./ScrollAreaRoot/ScrollAreaRoot.js');
var ScrollAreaViewport = require('./ScrollAreaViewport/ScrollAreaViewport.js');
var ScrollArea_module = require('./ScrollArea.module.css.js');
var ScrollAreaThumb = require('./ScrollAreaThumb/ScrollAreaThumb.js');
var factory = require('../../core/factory/factory.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var rem = require('../../core/utils/units-converters/rem.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../core/Box/Box.js');

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
  scrollbarSize: 12,
  scrollHideDelay: 1e3,
  type: "hover"
};
const varsResolver = createVarsResolver.createVarsResolver((_, { scrollbarSize }) => ({
  root: {
    "--scrollarea-scrollbar-size": rem.rem(scrollbarSize)
  }
}));
const ScrollArea = factory.factory((_props, ref) => {
  const props = useProps.useProps("ScrollArea", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "scrollbarSize",
    "vars",
    "type",
    "scrollHideDelay",
    "viewportProps",
    "viewportRef",
    "onScrollPositionChange",
    "children",
    "offsetScrollbars"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = React.useState(false);
  const getStyles = useStyles.useStyles({
    name: "ScrollArea",
    props,
    classes: ScrollArea_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    ScrollAreaRoot.ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles("root")), others),
    /* @__PURE__ */ React__default.createElement(
      ScrollAreaViewport.ScrollAreaViewport,
      __spreadProps(__spreadValues(__spreadValues({}, viewportProps), getStyles("viewport")), {
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      }),
      children
    ),
    /* @__PURE__ */ React__default.createElement(
      ScrollAreaScrollbar.ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React__default.createElement(ScrollAreaThumb.ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ React__default.createElement(
      ScrollAreaScrollbar.ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React__default.createElement(ScrollAreaThumb.ScrollAreaThumb, __spreadValues({}, getStyles("thumb")))
    ),
    /* @__PURE__ */ React__default.createElement(
      ScrollAreaCorner.ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
const ScrollAreaAutosize = factory.factory((props, ref) => {
  const _a = useProps.useProps("ScrollAreaAutosize", defaultProps, props), {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps",
    "style",
    "vars"
  ]);
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ React__default.createElement(Box.Box, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ React__default.createElement(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars
    },
    children
  )));
});
ScrollArea.classes = ScrollArea_module['default'];
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = ScrollArea_module['default'];
ScrollArea.Autosize = ScrollAreaAutosize;

exports.ScrollArea = ScrollArea;
exports.ScrollAreaAutosize = ScrollAreaAutosize;
//# sourceMappingURL=ScrollArea.js.map
