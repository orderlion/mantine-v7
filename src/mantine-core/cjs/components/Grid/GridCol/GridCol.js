'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var Grid_context = require('../Grid.context.js');
var GridColVariables = require('./GridColVariables.js');
var Grid_module = require('../Grid.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var useRandomClassname = require('../../../core/Box/use-random-classname/use-random-classname.js');
var Box = require('../../../core/Box/Box.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  span: 12
};
const GridCol = factory.factory((_props, ref) => {
  const props = useProps.useProps("GridCol", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, span, order, offset } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "span", "order", "offset"]);
  const ctx = Grid_context.useGridContext();
  const responsiveClassName = useRandomClassname.useRandomClassName();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    GridColVariables.GridColVariables,
    {
      selector: `.${responsiveClassName}`,
      span,
      order,
      offset
    }
  ), /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("col", {
      className: cx__default(className, responsiveClassName),
      style,
      classNames,
      styles
    })), others)
  ));
});
GridCol.classes = Grid_module['default'];
GridCol.displayName = "@mantine/core/GridCol";

exports.GridCol = GridCol;
//# sourceMappingURL=GridCol.js.map
