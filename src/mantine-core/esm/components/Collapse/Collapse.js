import React, { forwardRef } from 'react';
import { useReducedMotion } from '@mantine/hooks';
import { useCollapse } from './use-collapse.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';
import { useMantineTheme } from '../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { Box } from '../../core/Box/Box.js';
import { getStyleObject } from '../../core/Box/get-style-object/get-style-object.js';

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
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
const Collapse = forwardRef((props, ref) => {
  const _a = useProps("Collapse", defaultProps, props), {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity
  } = _a, others = __objRest(_a, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity"
  ]);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ React.createElement(Box, __spreadValues({}, others), children) : null;
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({}, getCollapseProps(__spreadValues({ style: getStyleObject(style, theme), ref }, others))), /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        opacity: opened || !animateOpacity ? 1 : 0,
        transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none"
      }
    },
    children
  ));
});
Collapse.displayName = "@mantine/core/Collapse";

export { Collapse };
//# sourceMappingURL=Collapse.js.map
