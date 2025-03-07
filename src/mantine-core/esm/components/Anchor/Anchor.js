import React from 'react';
import cx from 'clsx';
import classes from './Anchor.module.css.js';
import { Text } from '../Text/Text.js';
import { polymorphicFactory } from '../../core/factory/polymorphic-factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';

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
  underline: "hover"
};
const Anchor = polymorphicFactory((props, ref) => {
  const _a = useProps("Anchor", defaultProps, props), { underline, className } = _a, others = __objRest(_a, ["underline", "className"]);
  return /* @__PURE__ */ React.createElement(
    Text,
    __spreadProps(__spreadValues({
      component: "a",
      ref,
      className: cx(classes.root, className)
    }, others), {
      mod: { underline },
      __staticSelector: "Anchor"
    })
  );
});
Anchor.classes = classes;
Anchor.displayName = "@mantine/core/Anchor";

export { Anchor };
//# sourceMappingURL=Anchor.js.map
