'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var useComboboxTargetProps = require('../use-combobox-target-props/use-combobox-target-props.js');
var Combobox_context = require('../Combobox.context.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var isElement = require('../../../core/utils/is-element/is-element.js');

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
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true
};
const ComboboxEventsTarget = factory.factory((props, ref) => {
  const _a = useProps.useProps("ComboboxEventsTarget", defaultProps, props), { children, refProp, withKeyboardNavigation, withAriaAttributes, targetType } = _a, others = __objRest(_a, ["children", "refProp", "withKeyboardNavigation", "withAriaAttributes", "targetType"]);
  if (!isElement.isElement(children)) {
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = Combobox_context.useComboboxContext();
  const targetProps = useComboboxTargetProps.useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    onKeyDown: children.props.onKeyDown
  });
  return React.cloneElement(children, __spreadProps(__spreadValues(__spreadValues({}, targetProps), others), {
    [refProp]: hooks.useMergedRef(ref, ctx.store.targetRef, children == null ? void 0 : children.ref)
  }));
});
ComboboxEventsTarget.displayName = "@mantine/core/ComboboxEventsTarget";

exports.ComboboxEventsTarget = ComboboxEventsTarget;
//# sourceMappingURL=ComboboxEventsTarget.js.map
