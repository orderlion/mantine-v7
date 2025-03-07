import React, { forwardRef, cloneElement } from 'react';
import { useHoverCardContext } from '../HoverCard.context.js';
import { Popover } from '../../Popover/Popover.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { isElement } from '../../../core/utils/is-element/is-element.js';
import { createEventHandler } from '../../../core/utils/create-event-handler/create-event-handler.js';

var __defProp = Object.defineProperty;
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
  refProp: "ref"
};
const HoverCardTarget = forwardRef((props, ref) => {
  const _a = useProps("HoverCardTarget", defaultProps, props), { children, refProp } = _a, others = __objRest(_a, ["children", "refProp"]);
  if (!isElement(children)) {
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useHoverCardContext();
  const onMouseEnter = createEventHandler(children.props.onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler(children.props.onMouseLeave, ctx.closeDropdown);
  return /* @__PURE__ */ React.createElement(Popover.Target, __spreadValues({ refProp, ref }, others), cloneElement(children, { onMouseEnter, onMouseLeave }));
});
HoverCardTarget.displayName = "@mantine/core/HoverCardTarget";

export { HoverCardTarget };
//# sourceMappingURL=HoverCardTarget.js.map
