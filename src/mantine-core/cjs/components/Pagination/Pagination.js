'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Group = require('../Group/Group.js');
var PaginationRoot = require('./PaginationRoot/PaginationRoot.js');
var PaginationControl = require('./PaginationControl/PaginationControl.js');
var PaginationDots = require('./PaginationDots/PaginationDots.js');
var PaginationEdges = require('./PaginationEdges/PaginationEdges.js');
var PaginationItems = require('./PaginationItems/PaginationItems.js');
var Pagination_module = require('./Pagination.module.css.js');
var factory = require('../../core/factory/factory.js');
var useProps = require('../../core/MantineProvider/use-props/use-props.js');

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
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
const Pagination = factory.factory((_props, ref) => {
  const props = useProps.useProps("Pagination", defaultProps, _props);
  const _a = props, {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap
  } = _a, others = __objRest(_a, [
    "withEdges",
    "withControls",
    "getControlProps",
    "nextIcon",
    "previousIcon",
    "lastIcon",
    "firstIcon",
    "dotsIcon",
    "total",
    "gap"
  ]);
  if (total <= 0) {
    return null;
  }
  return /* @__PURE__ */ React__default.createElement(PaginationRoot.PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ React__default.createElement(Group.Group, { gap }, withEdges && /* @__PURE__ */ React__default.createElement(PaginationEdges.PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ React__default.createElement(PaginationEdges.PaginationPrevious, __spreadValues({ icon: previousIcon }, getControlProps == null ? void 0 : getControlProps("previous"))), /* @__PURE__ */ React__default.createElement(PaginationItems.PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ React__default.createElement(PaginationEdges.PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ React__default.createElement(PaginationEdges.PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
});
Pagination.classes = Pagination_module['default'];
Pagination.displayName = "@mantine/core/Pagination";
Pagination.Root = PaginationRoot.PaginationRoot;
Pagination.Control = PaginationControl.PaginationControl;
Pagination.Dots = PaginationDots.PaginationDots;
Pagination.First = PaginationEdges.PaginationFirst;
Pagination.Last = PaginationEdges.PaginationLast;
Pagination.Next = PaginationEdges.PaginationNext;
Pagination.Previous = PaginationEdges.PaginationPrevious;
Pagination.Items = PaginationItems.PaginationItems;

exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map
