'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var GridCol = require('./GridCol/GridCol.js');
var Grid_context = require('./Grid.context.js');
var GridVariables = require('./GridVariables.js');
var Grid_module = require('./Grid.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var useRandomClassname = require('../../core/Box/use-random-classname/use-random-classname.js');
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
  gutter: "md",
  grow: false,
  columns: 12
};
const varsResolver = createVarsResolver.createVarsResolver((_, { justify, align }) => ({
  root: {
    "--grid-justify": justify,
    "--grid-align": align
  }
}));
const Grid = factory.factory((_props, ref) => {
  const props = useProps.useProps("Grid", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "grow",
    "gutter",
    "columns",
    "align",
    "justify",
    "children"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Grid",
    classes: Grid_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const responsiveClassName = useRandomClassname.useRandomClassName();
  return /* @__PURE__ */ React__default.createElement(Grid_context.GridProvider, { value: { getStyles, grow, columns } }, /* @__PURE__ */ React__default.createElement(GridVariables.GridVariables, __spreadValues({ selector: `.${responsiveClassName}` }, props)), /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues(__spreadValues({ ref }, getStyles("root", { className: responsiveClassName })), others), /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, getStyles("inner")), children)));
});
Grid.classes = Grid_module['default'];
Grid.displayName = "@mantine/core/Grid";
Grid.Col = GridCol.GridCol;

exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map
