'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Tooltip_module = require('../Tooltip.module.css.js');
var useFloatingTooltip = require('./use-floating-tooltip.js');
var OptionalPortal = require('../../Portal/OptionalPortal.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var isElement = require('../../../core/utils/is-element/is-element.js');
var Box = require('../../../core/Box/Box.js');
var getStyleObject = require('../../../core/Box/get-style-object/get-style-object.js');
var getDefaultZIndex = require('../../../core/utils/get-default-z-index/get-default-z-index.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  position: "right",
  zIndex: getDefaultZIndex.getDefaultZIndex("popover")
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": getSize.getRadius(radius),
    "--tooltip-bg": color ? getThemeColor.getThemeColor(color, theme) : void 0
  }
}));
const TooltipFloating = factory.factory((_props, ref) => {
  var _b, _c;
  const props = useProps.useProps("TooltipFloating", defaultProps, _props);
  const _a = props, {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    zIndex,
    disabled,
    variant,
    vars,
    portalProps
  } = _a, others = __objRest(_a, [
    "children",
    "refProp",
    "withinPortal",
    "style",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "radius",
    "color",
    "label",
    "offset",
    "position",
    "multiline",
    "zIndex",
    "disabled",
    "variant",
    "vars",
    "portalProps"
  ]);
  const theme = MantineThemeProvider.useMantineTheme();
  const getStyles = useStyles.useStyles({
    name: "TooltipFloating",
    props,
    classes: Tooltip_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver
  });
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip.useFloatingTooltip({
    offset,
    position
  });
  if (!isElement.isElement(children)) {
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = hooks.useMergedRef(boundaryRef, children.ref, ref);
  const onMouseEnter = (event) => {
    var _a2, _b2;
    (_b2 = (_a2 = children.props).onMouseEnter) == null ? void 0 : _b2.call(_a2, event);
    handleMouseMove(event);
    setOpened(true);
  };
  const onMouseLeave = (event) => {
    var _a2, _b2;
    (_b2 = (_a2 = children.props).onMouseLeave) == null ? void 0 : _b2.call(_a2, event);
    setOpened(false);
  };
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(OptionalPortal.OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("tooltip", {
      style: __spreadProps(__spreadValues({}, getStyleObject.getStyleObject(style, theme)), {
        zIndex,
        display: !disabled && opened ? "block" : "none",
        top: (_b = y && Math.round(y)) != null ? _b : "",
        left: (_c = x && Math.round(x)) != null ? _c : ""
      })
    })), {
      variant,
      ref: floating
    }),
    label
  )), React.cloneElement(children, __spreadProps(__spreadValues({}, children.props), {
    [refProp]: targetRef,
    onMouseEnter,
    onMouseLeave
  })));
});
TooltipFloating.classes = Tooltip_module['default'];
TooltipFloating.displayName = "@mantine/core/TooltipFloating";

exports.TooltipFloating = TooltipFloating;
//# sourceMappingURL=TooltipFloating.js.map
