'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var getTitleSize = require('./get-title-size.js');
var Title_module = require('./Title.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');

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
  order: 1
};
const varsResolver = createVarsResolver.createVarsResolver((_, { order, size }) => {
  const sizeVariables = getTitleSize.getTitleSize(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize
    }
  };
});
const Title = factory.factory((_props, ref) => {
  const props = useProps.useProps("Title", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, order, vars, size, variant } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "order", "vars", "size", "variant"]);
  const getStyles = useStyles.useStyles({
    name: "Title",
    props,
    classes: Title_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      component: `h${order}`,
      variant,
      ref,
      mod: { order },
      size
    }), others)
  );
});
Title.classes = Title_module['default'];
Title.displayName = "@mantine/core/Title";

exports.Title = Title;
//# sourceMappingURL=Title.js.map
