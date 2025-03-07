'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Button_module = require('../Button.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var rem = require('../../../core/utils/units-converters/rem.js');

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
  orientation: "horizontal",
  borderWidth: 1
};
const varsResolver = createVarsResolver.createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem.rem(borderWidth) }
}));
const ButtonGroup = factory.factory((_props, ref) => {
  const props = useProps.useProps("ButtonGroup", defaultProps, _props);
  const _a = useProps.useProps("ButtonGroup", defaultProps, _props), {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]);
  const getStyles = useStyles.useStyles({
    name: "ButtonGroup",
    props,
    classes: Button_module['default'],
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("group")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.classes = Button_module['default'];
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map
