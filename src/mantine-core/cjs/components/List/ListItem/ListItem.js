'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var List_context = require('../List.context.js');
var List_module = require('../List.module.css.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../../core/Box/Box.js');

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
const defaultProps = {};
const ListItem = factory.factory((_props, ref) => {
  const props = useProps.useProps("ListItem", defaultProps, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, icon, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "icon", "children"]);
  const ctx = List_context.useListContext();
  const _icon = icon || ctx.icon;
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ React__default.createElement(
    Box.Box,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("item", __spreadProps(__spreadValues({}, stylesApiProps), { className, style }))), {
      component: "li",
      mod: { "with-icon": !!_icon, centered: ctx.center },
      ref
    }), others),
    /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, ctx.getStyles("itemWrapper", stylesApiProps)), _icon && /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("itemIcon", stylesApiProps)), _icon), /* @__PURE__ */ React__default.createElement("span", __spreadValues({}, ctx.getStyles("itemLabel", stylesApiProps)), children))
  );
});
ListItem.classes = List_module['default'];
ListItem.displayName = "@mantine/core/ListItem";

exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map
