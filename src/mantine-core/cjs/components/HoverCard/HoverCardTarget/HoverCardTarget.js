'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var HoverCard_context = require('../HoverCard.context.js');
var Popover = require('../../Popover/Popover.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var isElement = require('../../../core/utils/is-element/is-element.js');
var createEventHandler = require('../../../core/utils/create-event-handler/create-event-handler.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const HoverCardTarget = React.forwardRef((props, ref) => {
  const _a = useProps.useProps("HoverCardTarget", defaultProps, props), { children, refProp } = _a, others = __objRest(_a, ["children", "refProp"]);
  if (!isElement.isElement(children)) {
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = HoverCard_context.useHoverCardContext();
  const onMouseEnter = createEventHandler.createEventHandler(children.props.onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler.createEventHandler(children.props.onMouseLeave, ctx.closeDropdown);
  return /* @__PURE__ */ React__default.createElement(Popover.Popover.Target, __spreadValues({ refProp, ref }, others), React.cloneElement(children, { onMouseEnter, onMouseLeave }));
});
HoverCardTarget.displayName = "@mantine/core/HoverCardTarget";

exports.HoverCardTarget = HoverCardTarget;
//# sourceMappingURL=HoverCardTarget.js.map
