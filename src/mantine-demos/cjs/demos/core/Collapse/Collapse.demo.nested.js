'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

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
function CollapsedDemo(_a) {
  var _b = _a, {
    children,
    buttonProps
  } = _b, others = __objRest(_b, [
    "children",
    "buttonProps"
  ]);
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto", mt: "md" }, /* @__PURE__ */ React__default.createElement(core.Button, __spreadValues({ onClick: () => setOpened((o) => !o), mb: 5 }, buttonProps)), /* @__PURE__ */ React__default.createElement(core.Collapse, __spreadValues({ in: opened }, others), children));
}
const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.";
function Demo() {
  return /* @__PURE__ */ React__default.createElement(CollapsedDemo, { buttonProps: { children: "Root collapse" } }, /* @__PURE__ */ React__default.createElement(core.Text, { mt: "md", size: "lg", fw: 700 }, "This collapse contains another collapse"), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "xs" }, lorem), /* @__PURE__ */ React__default.createElement(CollapsedDemo, { buttonProps: { variant: "outline", children: "Inner collapse" } }, /* @__PURE__ */ React__default.createElement(core.Text, { mt: "md", size: "lg", fw: 700 }, "This collapse is inside another collapse"), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "xs" }, lorem)));
}
const nested = {
  type: "code",
  component: Demo
};

exports.CollapsedDemo = CollapsedDemo;
exports.nested = nested;
//# sourceMappingURL=Collapse.demo.nested.js.map
