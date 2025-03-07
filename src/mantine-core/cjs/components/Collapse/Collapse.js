'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var useCollapse = require('./use-collapse.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var MantineThemeProvider = require('../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var Box = require('../../core/Box/Box.js');
var getStyleObject = require('../../core/Box/get-style-object/get-style-object.js');

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
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
const Collapse = React.forwardRef((props, ref) => {
  const _a = useProps.useProps("Collapse", defaultProps, props), {
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
  const theme = MantineThemeProvider.useMantineTheme();
  const shouldReduceMotion = hooks.useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse.useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({}, others), children) : null;
  }
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({}, getCollapseProps(__spreadValues({ style: getStyleObject.getStyleObject(style, theme), ref }, others))), /* @__PURE__ */ React__default.createElement(
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

exports.Collapse = Collapse;
//# sourceMappingURL=Collapse.js.map
