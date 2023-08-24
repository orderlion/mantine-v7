import React from 'react';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';
import { rem, Menu, Button, Text } from '@mantine/core';

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
  const iconProps = { style: { width: rem(14), height: rem(14) } };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, withTarget && /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle menu")), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Label, null, "Application"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconSettings, __spreadValues({}, iconProps)) }, "Settings"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconMessageCircle, __spreadValues({}, iconProps)) }, "Messages"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconPhoto, __spreadValues({}, iconProps)) }, "Gallery"), widthRightSection && /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconSearch, __spreadValues({}, iconProps)),
      rightSection: /* @__PURE__ */ React.createElement(Text, { size: "xs", c: "dimmed" }, "\u2318K")
    },
    "Search"
  ), /* @__PURE__ */ React.createElement(Menu.Divider, null), /* @__PURE__ */ React.createElement(Menu.Label, null, "Danger zone"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconArrowsLeftRight, __spreadValues({}, iconProps)) }, "Transfer my data"), /* @__PURE__ */ React.createElement(Menu.Item, { color: "red", leftSection: /* @__PURE__ */ React.createElement(IconTrash, __spreadValues({}, iconProps)) }, "Delete my account")));
}

export { DemoMenuItems };
//# sourceMappingURL=_menu-items.js.map
