'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var RingProgress_module = require('./RingProgress.module.css.js');
var getCurves = require('./get-curves/get-curves.js');
var Curve = require('./Curve/Curve.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var rem = require('../../core/utils/units-converters/rem.js');

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
  size: 120,
  thickness: 12
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size, thickness }) => ({
  root: {
    "--rp-size": rem.rem(size),
    "--rp-label-offset": rem.rem(thickness * 2)
  }
}));
const RingProgress = factory.factory((_props, ref) => {
  const props = useProps.useProps("RingProgress", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections,
    size,
    thickness,
    roundCaps,
    rootColor
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "label",
    "sections",
    "size",
    "thickness",
    "roundCaps",
    "rootColor"
  ]);
  const getStyles = useStyles.useStyles({
    name: "RingProgress",
    classes: RingProgress_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const curves = getCurves.getCurves({
    size,
    thickness,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => /* @__PURE__ */ React__default.createElement(
    Curve.Curve,
    __spreadProps(__spreadValues({}, data), {
      key: index,
      size,
      thickness,
      sum,
      offset,
      color: data == null ? void 0 : data.color,
      root,
      lineRoundCaps,
      getStyles
    })
  ));
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), { size, ref }), others), /* @__PURE__ */ React__default.createElement("svg", __spreadValues({}, getStyles("svg")), curves), label && /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("label")), label));
});
RingProgress.classes = RingProgress_module['default'];
RingProgress.displayName = "@mantine/core/RingProgress";

exports.RingProgress = RingProgress;
//# sourceMappingURL=RingProgress.js.map
