import React from 'react';
import { Group } from '../Group/Group.js';
import { PaginationRoot } from './PaginationRoot/PaginationRoot.js';
import { PaginationControl } from './PaginationControl/PaginationControl.js';
import { PaginationDots } from './PaginationDots/PaginationDots.js';
import { PaginationFirst, PaginationPrevious, PaginationNext, PaginationLast } from './PaginationEdges/PaginationEdges.js';
import { PaginationItems } from './PaginationItems/PaginationItems.js';
import classes from './Pagination.module.css.js';
import { factory } from '../../core/factory/factory.js';
import { useProps } from '../../core/MantineProvider/use-props/use-props.js';

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
const Pagination = factory((_props, ref) => {
  const props = useProps("Pagination", defaultProps, _props);
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
  return /* @__PURE__ */ React.createElement(PaginationRoot, __spreadValues({ ref, total }, others), /* @__PURE__ */ React.createElement(Group, { gap }, withEdges && /* @__PURE__ */ React.createElement(PaginationFirst, __spreadValues({ icon: firstIcon }, getControlProps == null ? void 0 : getControlProps("first"))), withControls && /* @__PURE__ */ React.createElement(PaginationPrevious, __spreadValues({ icon: previousIcon }, getControlProps == null ? void 0 : getControlProps("previous"))), /* @__PURE__ */ React.createElement(PaginationItems, { dotsIcon }), withControls && /* @__PURE__ */ React.createElement(PaginationNext, __spreadValues({ icon: nextIcon }, getControlProps == null ? void 0 : getControlProps("next"))), withEdges && /* @__PURE__ */ React.createElement(PaginationLast, __spreadValues({ icon: lastIcon }, getControlProps == null ? void 0 : getControlProps("last")))));
});
Pagination.classes = classes;
Pagination.displayName = "@mantine/core/Pagination";
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;

export { Pagination };
//# sourceMappingURL=Pagination.js.map
