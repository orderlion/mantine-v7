'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var getMarkColor = require('./get-mark-color.js');
var Mark_module = require('./Mark.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');

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
  color: "yellow"
};
const varsResolver = createVarsResolver.createVarsResolver((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor.getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor.getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
const Mark = factory.factory((_props, ref) => {
  const props = useProps.useProps("Mark", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, color, variant } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "color", "variant"]);
  const getStyles = useStyles.useStyles({
    name: "Mark",
    props,
    className,
    style,
    classes: Mark_module['default'],
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ component: "mark", ref, variant }, getStyles("root")), others));
});
Mark.classes = Mark_module['default'];
Mark.displayName = "@mantine/core/Mark";

exports.Mark = Mark;
//# sourceMappingURL=Mark.js.map
