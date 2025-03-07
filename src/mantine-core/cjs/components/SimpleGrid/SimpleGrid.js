'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SimpleGridVariables = require('./SimpleGridVariables.js');
var SimpleGrid_module = require('./SimpleGrid.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var useRandomClassname = require('../../core/Box/use-random-classname/use-random-classname.js');
var Box = require('../../core/Box/Box.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  cols: 1,
  spacing: "md",
  verticalSpacing: "md"
};
const SimpleGrid = factory.factory((_props, ref) => {
  const props = useProps.useProps("SimpleGrid", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "cols",
    "verticalSpacing",
    "spacing"
  ]);
  const getStyles = useStyles.useStyles({
    name: "SimpleGrid",
    classes: SimpleGrid_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const responsiveClassName = useRandomClassname.useRandomClassName();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(SimpleGridVariables.SimpleGridVariables, __spreadProps(__spreadValues({}, props), { selector: `.${responsiveClassName}` })), /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ ref }, getStyles("root", { className: responsiveClassName })), others)));
});
SimpleGrid.classes = SimpleGrid_module['default'];
SimpleGrid.displayName = "@mantine/core/SimpleGrid";

exports.SimpleGrid = SimpleGrid;
//# sourceMappingURL=SimpleGrid.js.map
