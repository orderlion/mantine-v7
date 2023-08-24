'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _menuItems = require('./_menu-items.js');
var floatingPositionData = require('../../../shared/floating-position-data.js');

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
function Wrapper(props) {
  return /* @__PURE__ */ React__default.createElement(core.Menu, __spreadValues({ opened: true, trigger: "hover" }, props), /* @__PURE__ */ React__default.createElement(_menuItems.DemoMenuItems, null));
}
const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`;
const positionConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "position",
      type: "select",
      initialValue: "bottom",
      libraryValue: "bottom",
      data: [
        { label: "bottom", value: "bottom" },
        { label: "bottom-start", value: "bottom-start" },
        { label: "bottom-end", value: "bottom-end" },
        { label: "top", value: "top" },
        { label: "top-start", value: "top-start" },
        { label: "top-end", value: "top-end" },
        { label: "left", value: "left" },
        { label: "left-start", value: "left-start" },
        { label: "left-end", value: "left-end" },
        { label: "right", value: "right" },
        { label: "right-start", value: "right-start" },
        { label: "right-end", value: "right-end" }
      ]
    },
    {
      prop: "offset",
      type: "number",
      initialValue: 5,
      libraryValue: 5,
      max: 20,
      min: -20
    },
    {
      prop: "withArrow",
      type: "boolean",
      initialValue: false,
      libraryValue: false
    },
    {
      prop: "arrowPosition",
      type: "select",
      data: floatingPositionData.FLOATING_ARROW_POSITION_DATA,
      initialValue: "side",
      libraryValue: "side"
    }
  ]
};

exports.positionConfigurator = positionConfigurator;
//# sourceMappingURL=Menu.demo.positionConfigurator.js.map
