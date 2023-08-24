'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
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
function DemoMenuItems({ widthRightSection = true, withTarget = true }) {
  const iconProps = { style: { width: core.rem(14), height: core.rem(14) } };
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, withTarget && /* @__PURE__ */ React__default.createElement(core.Menu.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle menu")), /* @__PURE__ */ React__default.createElement(core.Menu.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Application"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, { leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, __spreadValues({}, iconProps)) }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, { leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, __spreadValues({}, iconProps)) }, "Messages"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, { leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, __spreadValues({}, iconProps)) }, "Gallery"), widthRightSection && /* @__PURE__ */ React__default.createElement(
    core.Menu.Item,
    {
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, __spreadValues({}, iconProps)),
      rightSection: /* @__PURE__ */ React__default.createElement(core.Text, { size: "xs", c: "dimmed" }, "\u2318K")
    },
    "Search"
  ), /* @__PURE__ */ React__default.createElement(core.Menu.Divider, null), /* @__PURE__ */ React__default.createElement(core.Menu.Label, null, "Danger zone"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, { leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowsLeftRight, __spreadValues({}, iconProps)) }, "Transfer my data"), /* @__PURE__ */ React__default.createElement(core.Menu.Item, { color: "red", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconTrash, __spreadValues({}, iconProps)) }, "Delete my account")));
}

exports.DemoMenuItems = DemoMenuItems;
//# sourceMappingURL=_menu-items.js.map
