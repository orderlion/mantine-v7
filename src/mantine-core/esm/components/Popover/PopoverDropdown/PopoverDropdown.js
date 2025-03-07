import React from 'react';
import { useFocusReturn, useMergedRef } from '@mantine/hooks';
import { usePopoverContext } from '../Popover.context.js';
import classes from '../Popover.module.css.js';
import { OptionalPortal } from '../../Portal/OptionalPortal.js';
import { Transition } from '../../Transition/Transition.js';
import { FocusTrap } from '../../FocusTrap/FocusTrap.js';
import { closeOnEscape } from '../../../core/utils/close-on-escape/close-on-escape.js';
import { FloatingArrow } from '../../Floating/FloatingArrow/FloatingArrow.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { Box } from '../../../core/Box/Box.js';
import { rem } from '../../../core/utils/units-converters/rem.js';

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
const PopoverDropdown = factory((_props, ref) => {
  var _b, _c, _d, _e, _f;
  const props = useProps("PopoverDropdown", defaultProps, _props);
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
  const ctx = usePopoverContext();
  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus
  });
  const accessibleProps = ctx.withRoles ? {
    "aria-labelledby": ctx.getTargetId(),
    id: ctx.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {};
  const mergedRef = useMergedRef(ref, ctx.floating);
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ React.createElement(
    Transition,
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
      return /* @__PURE__ */ React.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ React.createElement(
        Box,
        __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
          variant,
          ref: mergedRef,
          onKeyDownCapture: closeOnEscape(ctx.onClose, {
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
              width: ctx.width === "target" ? void 0 : rem(ctx.width)
            }),
            style
          ]
        })),
        children,
        /* @__PURE__ */ React.createElement(
          FloatingArrow,
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
PopoverDropdown.classes = classes;
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";

export { PopoverDropdown };
//# sourceMappingURL=PopoverDropdown.js.map
