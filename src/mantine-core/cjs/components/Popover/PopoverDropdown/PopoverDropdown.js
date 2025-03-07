'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var Popover_context = require('../Popover.context.js');
var Popover_module = require('../Popover.module.css.js');
var OptionalPortal = require('../../Portal/OptionalPortal.js');
var Transition = require('../../Transition/Transition.js');
var FocusTrap = require('../../FocusTrap/FocusTrap.js');
var closeOnEscape = require('../../../core/utils/close-on-escape/close-on-escape.js');
var FloatingArrow = require('../../Floating/FloatingArrow/FloatingArrow.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../../core/Box/Box.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
const defaultProps = {};
const PopoverDropdown = factory.factory((_props, ref) => {
  var _b, _c, _d, _e, _f;
  const props = useProps.useProps("PopoverDropdown", defaultProps, _props);
  const _a = props, {
    className,
    style,
    unstyled,
    vars,
    children,
    onKeyDownCapture,
    variant,
    classNames,
    styles
  } = _a, others = __objRest(_a, [
    "className",
    "style",
    "unstyled",
    "vars",
    "children",
    "onKeyDownCapture",
    "variant",
    "classNames",
    "styles"
  ]);
  const ctx = Popover_context.usePopoverContext();
  const returnFocus = hooks.useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus
  });
  const accessibleProps = ctx.withRoles ? {
    "aria-labelledby": ctx.getTargetId(),
    id: ctx.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {};
  const mergedRef = hooks.useMergedRef(ref, ctx.floating);
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ React__default.createElement(OptionalPortal.OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ React__default.createElement(
    Transition.Transition,
    __spreadProps(__spreadValues({
      mounted: ctx.opened
    }, ctx.transitionProps), {
      transition: ((_b = ctx.transitionProps) == null ? void 0 : _b.transition) || "fade",
      duration: (_d = (_c = ctx.transitionProps) == null ? void 0 : _c.duration) != null ? _d : 150,
      keepMounted: ctx.keepMounted,
      exitDuration: typeof ((_e = ctx.transitionProps) == null ? void 0 : _e.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_f = ctx.transitionProps) == null ? void 0 : _f.duration
    }),
    (transitionStyles) => {
      var _a2, _b2;
      return /* @__PURE__ */ React__default.createElement(FocusTrap.FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ React__default.createElement(
        Box.Box,
        __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
          variant,
          ref: mergedRef,
          onKeyDownCapture: closeOnEscape.closeOnEscape(ctx.onClose, {
            active: ctx.closeOnEscape,
            onTrigger: returnFocus,
            onKeyDown: onKeyDownCapture
          }),
          "data-position": ctx.placement
        }), ctx.getStyles("dropdown", {
          className,
          props,
          classNames,
          styles,
          style: [
            __spreadProps(__spreadValues({}, transitionStyles), {
              zIndex: ctx.zIndex,
              top: (_a2 = ctx.y) != null ? _a2 : 0,
              left: (_b2 = ctx.x) != null ? _b2 : 0,
              width: ctx.width === "target" ? void 0 : rem.rem(ctx.width)
            }),
            style
          ]
        })),
        children,
        /* @__PURE__ */ React__default.createElement(
          FloatingArrow.FloatingArrow,
          __spreadValues({
            ref: ctx.arrowRef,
            arrowX: ctx.arrowX,
            arrowY: ctx.arrowY,
            visible: ctx.withArrow,
            position: ctx.placement,
            arrowSize: ctx.arrowSize,
            arrowRadius: ctx.arrowRadius,
            arrowOffset: ctx.arrowOffset,
            arrowPosition: ctx.arrowPosition
          }, ctx.getStyles("arrow", {
            props,
            classNames,
            styles
          }))
        )
      ));
    }
  ));
});
PopoverDropdown.classes = Popover_module['default'];
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";

exports.PopoverDropdown = PopoverDropdown;
//# sourceMappingURL=PopoverDropdown.js.map
