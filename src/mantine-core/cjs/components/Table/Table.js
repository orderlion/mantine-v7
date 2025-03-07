'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Table_components = require('./Table.components.js');
var TableScrollContainer = require('./TableScrollContainer.js');
var Table_context = require('./Table.context.js');
var Table_module = require('./Table.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');
var useStyles = require('../../core/styles-api/use-styles/use-styles.js');
var Box = require('../../core/Box/Box.js');
var createVarsResolver = require('../../core/styles-api/create-vars-resolver/create-vars-resolver.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getThemeColor = require('../../core/MantineProvider/color-functions/get-theme-color/get-theme-color.js');

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
  captionSide: "bottom",
  withRowBorders: true,
  verticalSpacing: 7,
  horizontalSpacing: "xs"
};
const varsResolver = createVarsResolver.createVarsResolver(
  (theme, {
    layout,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    borderColor,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover
  }) => ({
    table: {
      "--table-layout": layout,
      "--table-caption-side": captionSide,
      "--table-horizontal-spacing": getSize.getSpacing(horizontalSpacing),
      "--table-vertical-spacing": getSize.getSpacing(verticalSpacing),
      "--table-border-color": borderColor ? getThemeColor.getThemeColor(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? getThemeColor.getThemeColor(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? getThemeColor.getThemeColor(highlightOnHoverColor, theme) : void 0
    }
  })
);
const Table = factory.factory((_props, ref) => {
  const props = useProps.useProps("Table", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "horizontalSpacing",
    "verticalSpacing",
    "captionSide",
    "stripedColor",
    "highlightOnHoverColor",
    "striped",
    "highlightOnHover",
    "withColumnBorders",
    "withRowBorders",
    "withTableBorder",
    "borderColor",
    "layout",
    "variant"
  ]);
  const getStyles = useStyles.useStyles({
    name: "Table",
    props,
    className,
    style,
    classes: Table_module['default'],
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React__default.createElement(
    Table_context.TableProvider,
    {
      value: {
        getStyles,
        striped: striped === true ? "odd" : striped || void 0,
        highlightOnHover,
        withColumnBorders,
        withRowBorders,
        captionSide: captionSide || "bottom"
      }
    },
    /* @__PURE__ */ React__default.createElement(
      Box.Box,
      __spreadValues(__spreadValues({
        component: "table",
        variant,
        ref,
        mod: { "data-with-table-border": withTableBorder }
      }, getStyles("table")), others)
    )
  );
});
Table.classes = Table_module['default'];
Table.displayName = "@mantine/core/Table";
Table.Td = Table_components.TableTd;
Table.Th = Table_components.TableTh;
Table.Tr = Table_components.TableTr;
Table.Thead = Table_components.TableThead;
Table.Tbody = Table_components.TableTbody;
Table.Tfoot = Table_components.TableTfoot;
Table.Caption = Table_components.TableCaption;
Table.ScrollContainer = TableScrollContainer.TableScrollContainer;

exports.Table = Table;
//# sourceMappingURL=Table.js.map
