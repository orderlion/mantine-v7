'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Accordion_context = require('../Accordion.context.js');
var AccordionItem_context = require('../AccordionItem.context.js');
var Accordion_module = require('../Accordion.module.css.js');
var Collapse = require('../../Collapse/Collapse.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');

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
const AccordionPanel = factory.factory((props, ref) => {
  const _a = useProps.useProps(
    "AccordionPanel",
    defaultProps,
    props
  ), { classNames, className, style, styles, unstyled, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "children"]);
  const { value } = AccordionItem_context.useAccordionItemContext();
  const ctx = Accordion_context.useAccordionContext();
  return /* @__PURE__ */ React__default.createElement(
    Collapse.Collapse,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("panel", { className, classNames, style, styles })), others), {
      in: ctx.isItemActive(value),
      transitionDuration: ctx.transitionDuration,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value)
    }),
    /* @__PURE__ */ React__default.createElement("div", __spreadValues({}, ctx.getStyles("content", { classNames, styles })), children)
  );
});
AccordionPanel.displayName = "@mantine/core/AccordionPanel";
AccordionPanel.classes = Accordion_module['default'];

exports.AccordionPanel = AccordionPanel;
//# sourceMappingURL=AccordionPanel.js.map
