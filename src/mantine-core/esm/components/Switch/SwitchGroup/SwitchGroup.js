import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { SwitchGroupProvider } from '../SwitchGroup.context.js';
import { Input } from '../../Input/Input.js';
import { factory } from '../../../core/factory/factory.js';
import { useProps } from '../../../core/MantineProvider/use-props/use-props.js';

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
const SwitchGroup = factory((props, ref) => {
  const _a = useProps(
    "SwitchGroup",
    defaultProps,
    props
  ), { value, defaultValue, onChange, size, wrapperProps, children } = _a, others = __objRest(_a, ["value", "defaultValue", "onChange", "size", "wrapperProps", "children"]);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return /* @__PURE__ */ React.createElement(SwitchGroupProvider, { value: { value: _value, onChange: handleChange, size } }, /* @__PURE__ */ React.createElement(
    Input.Wrapper,
    __spreadProps(__spreadValues(__spreadValues({
      size,
      ref
    }, wrapperProps), others), {
      labelElement: "div",
      __staticSelector: "SwitchGroup"
    }),
    children
  ));
});
SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = "@mantine/core/SwitchGroup";

export { SwitchGroup };
//# sourceMappingURL=SwitchGroup.js.map
