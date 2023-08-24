'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Table_context = require('./Table.context.js');
var Table_module = require('./Table.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var Box = require('../../core/Box/Box.js');

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
function getDataAttributes(ctx, options) {
  if (!options) {
    return void 0;
  }
  const data = {};
  if (options.columnBorder && ctx.withColumnBorders) {
    data["data-with-column-border"] = true;
  }
  if (options.rowBorder && ctx.withRowBorders) {
    data["data-with-row-border"] = true;
  }
  if (options.striped && ctx.striped) {
    data["data-striped"] = ctx.striped;
  }
  if (options.highlightOnHover && ctx.highlightOnHover) {
    data["data-hover"] = true;
  }
  if (options.captionSide && ctx.captionSide) {
    data["data-side"] = ctx.captionSide;
  }
  return data;
}
function tableElement(element, options) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = factory.factory((_props, ref) => {
    const props = useProps.useProps(name, {}, _props);
    const _a = props, { classNames, className, style, styles, unstyled } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled"]);
    const ctx = Table_context.useTableContext();
    return /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues(__spreadValues(__spreadValues({
        component: element,
        ref
      }, getDataAttributes(ctx, options)), ctx.getStyles(element, { className, classNames, style, styles, props })), others)
    );
  });
  Component.displayName = `@mantine/core/${name}`;
  Component.classes = Table_module['default'];
  return Component;
}
const TableTh = tableElement("th", { columnBorder: true });
const TableTd = tableElement("td", { columnBorder: true });
const TableTr = tableElement("tr", {
  rowBorder: true,
  striped: true,
  highlightOnHover: true
});
const TableThead = tableElement("thead");
const TableTbody = tableElement("tbody");
const TableTfoot = tableElement("tfoot");
const TableCaption = tableElement("caption", { captionSide: true });

exports.TableCaption = TableCaption;
exports.TableTbody = TableTbody;
exports.TableTd = TableTd;
exports.TableTfoot = TableTfoot;
exports.TableTh = TableTh;
exports.TableThead = TableThead;
exports.TableTr = TableTr;
exports.tableElement = tableElement;
//# sourceMappingURL=Table.components.js.map
