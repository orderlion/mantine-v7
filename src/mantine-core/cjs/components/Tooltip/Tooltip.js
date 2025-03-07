'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var cx = require('clsx');
var TooltipFloating = require('./TooltipFloating/TooltipFloating.js');
var TooltipGroup = require('./TooltipGroup/TooltipGroup.js');
var useTooltip = require('./use-tooltip.js');
var Tooltip_module = require('./Tooltip.module.css.js');
var getFloatingPosition = require('../Floating/get-floating-position/get-floating-position.js');
var getTransitionProps = require('../Transition/get-transition-props/get-transition-props.js');
var OptionalPortal = require('../Portal/OptionalPortal.js');
var Transition = require('../Transition/Transition.js');
var FloatingArrow = require('../Floating/FloatingArrow/FloatingArrow.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var DirectionProvider = require('../../core/DirectionProvider/DirectionProvider.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var isElement = require('../../core/utils/is-element/is-element.js');
var Box = require('../../core/Box/Box.js');
var getDefaultZIndex = require('../../core/utils/get-default-z-index/get-default-z-index.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  position: "top",
  refProp: "ref",
  withinPortal: true,
  inline: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: true, focus: false, touch: false },
  zIndex: getDefaultZIndex.getDefaultZIndex("popover"),
  positionDependencies: []
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": getSize.getRadius(radius),
    "--tooltip-bg": color ? getThemeColor.getThemeColor(color, theme) : void 0
  }
}));
const Tooltip = factory.factory((_props, ref) => {
  const props = useProps.useProps("Tooltip", defaultProps, _props);
  const _a = useProps.useProps("Tooltip", defaultProps, props), {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline,
    variant,
    keepMounted,
    vars,
    portalProps
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "refProp",
    "label",
    "openDelay",
    "closeDelay",
    "onPositionChange",
    "opened",
    "withinPortal",
    "radius",
    "color",
    "classNames",
    "styles",
    "unstyled",
    "style",
    "className",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "offset",
    "transitionProps",
    "multiline",
    "events",
    "zIndex",
    "disabled",
    "positionDependencies",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "inline",
    "variant",
    "keepMounted",
    "vars",
    "portalProps"
  ]);
  const { dir } = DirectionProvider.useDirection();
  const arrowRef = React.useRef(null);
  const tooltip = useTooltip.useTooltip({
    position: getFloatingPosition.getFloatingPosition(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    positionDependencies: [...positionDependencies, children],
    inline
  });
  const getStyles = useStyles.useStyles({
    name: "Tooltip",
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
  if (!isElement.isElement(children)) {
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = hooks.useMergedRef(tooltip.reference, children.ref, ref);
  const transition = getTransitionProps.getTransitionProps(transitionProps, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(OptionalPortal.OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React__default.createElement(
    Transition.Transition,
    __spreadProps(__spreadValues({}, transition), {
      keepMounted,
      mounted: !disabled && !!tooltip.opened,
      duration: tooltip.isGroupPhase ? 10 : transition.duration
    }),
    (transitionStyles) => {
      var _a2, _b;
      return /* @__PURE__ */ React__default.createElement(
        Box.Box,
        __spreadValues(__spreadProps(__spreadValues({}, others), {
          variant,
          mod: { multiline }
        }), tooltip.getFloatingProps({
          ref: tooltip.floating,
          className: getStyles("tooltip").className,
          style: __spreadProps(__spreadValues(__spreadValues({}, getStyles("tooltip").style), transitionStyles), {
            zIndex,
            top: (_a2 = tooltip.y) != null ? _a2 : 0,
            left: (_b = tooltip.x) != null ? _b : 0
          })
        })),
        label,
        /* @__PURE__ */ React__default.createElement(
          FloatingArrow.FloatingArrow,
          __spreadValues({
            ref: arrowRef,
            arrowX: tooltip.arrowX,
            arrowY: tooltip.arrowY,
            visible: withArrow,
            position: tooltip.placement,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition
          }, getStyles("arrow"))
        )
      );
    }
  )), React.cloneElement(
    children,
    tooltip.getReferenceProps(__spreadValues({
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseMove: props.onMouseMove,
      onPointerDown: props.onPointerDown,
      onPointerEnter: props.onPointerEnter,
      [refProp]: targetRef,
      className: cx__default(className, children.props.className)
    }, children.props))
  ));
});
Tooltip.classes = Tooltip_module['default'];
Tooltip.displayName = "@mantine/core/Tooltip";
Tooltip.Floating = TooltipFloating.TooltipFloating;
Tooltip.Group = TooltipGroup.TooltipGroup;

exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map
