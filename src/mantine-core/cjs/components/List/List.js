'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ListItem = require('./ListItem/ListItem.js');
var List_context = require('./List.context.js');
var List_module = require('./List.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');

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
  type: "unordered",
  size: "md",
  spacing: 0
};
const varsResolver = createVarsResolver.createVarsResolver((_, { size, spacing }) => ({
  root: {
    "--list-fz": getSize.getFontSize(size),
    "--list-lh": getSize.getLineHeight(size),
    "--list-spacing": getSize.getSpacing(spacing)
  }
}));
const List = factory.factory((_props, ref) => {
  const props = useProps.useProps("List", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    withPadding,
    icon,
    spacing,
    center,
    listStyleType
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "type",
    "withPadding",
    "icon",
    "spacing",
    "center",
    "listStyleType"
  ]);
  const getStyles = useStyles.useStyles({
    name: "List",
    classes: List_module['default'],
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(List_context.ListProvider, { value: { center, icon, getStyles } }, /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { style: { listStyleType } })), {
      component: type === "unordered" ? "ul" : "ol",
      mod: { "with-padding": withPadding },
      ref
    }), others),
    children
  ));
});
List.classes = List_module['default'];
List.displayName = "@mantine/core/List";
List.Item = ListItem.ListItem;

exports.List = List;
//# sourceMappingURL=List.js.map
