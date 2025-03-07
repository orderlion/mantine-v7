import React, { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useComboboxContext } from '../Combobox.context.js';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props.js';
import { Popover } from '../../Popover/Popover.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';
import { isElement } from '../../../core/utils/is-element/is-element.js';

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
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true
};
const ComboboxTarget = factory((props, ref) => {
  const _a = useProps("ComboboxTarget", defaultProps, props), { children, refProp, withKeyboardNavigation, withAriaAttributes, targetType } = _a, others = __objRest(_a, ["children", "refProp", "withKeyboardNavigation", "withAriaAttributes", "targetType"]);
  if (!isElement(children)) {
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    onKeyDown: children.props.onKeyDown
  });
  const clonedElement = cloneElement(children, __spreadValues(__spreadValues({}, targetProps), others));
  return /* @__PURE__ */ React.createElement(Popover.Target, { ref: useMergedRef(ref, ctx.store.targetRef) }, clonedElement);
});
ComboboxTarget.displayName = "@mantine/core/ComboboxTarget";

export { ComboboxTarget };
//# sourceMappingURL=ComboboxTarget.js.map
