'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PillGroup_context = require('../PillGroup.context.js');
var PillsInput_context = require('../../PillsInput/PillsInput.context.js');
var Pill_module = require('../Pill.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../../core/Box/Box.js');
var createVarsResolver = require('../../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../../core/utils/get-size/get-size.js');

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
const defaultProps = {};
const varsResolver = createVarsResolver.createVarsResolver((_, { gap }, { size }) => ({
  group: {
    "--pg-gap": typeof gap !== "undefined" ? getSize.getSize(gap) : getSize.getSize(size, "pg-gap")
  }
}));
const PillGroup = factory.factory((_props, ref) => {
  const props = useProps.useProps("PillGroup", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, size, disabled } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "size", "disabled"]);
  const pillsInputCtx = PillsInput_context.usePillsInputContext();
  const _size = (pillsInputCtx == null ? void 0 : pillsInputCtx.size) || size || "sm";
  const getStyles = useStyles.useStyles({
    name: "PillGroup",
    classes: Pill_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    stylesCtx: { size: _size },
    rootSelector: "group"
  });
  return /* @__PURE__ */ React__default.createElement(PillGroup_context.PillGroupProvider, { value: { size: _size, disabled } }, /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ ref, size: _size }, getStyles("group")), others)));
});
PillGroup.classes = Pill_module['default'];
PillGroup.displayName = "@mantine/core/PillGroup";

exports.PillGroup = PillGroup;
//# sourceMappingURL=PillGroup.js.map
