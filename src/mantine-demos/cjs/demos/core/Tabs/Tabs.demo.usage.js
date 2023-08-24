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
function Wrapper(props) {
  const panelProps = props.orientation === "vertical" ? { pl: "xs" } : { pt: "xs" };
  const iconStyle = { width: core.rem(12), height: core.rem(12) };
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadValues({ defaultValue: "gallery" }, props), /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "gallery", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { style: iconStyle }) }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "messages", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, { style: iconStyle }) }, "Messages"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "settings", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, { style: iconStyle }) }, "Settings")), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, __spreadValues({ value: "gallery" }, panelProps), "Gallery tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, __spreadValues({ value: "messages" }, panelProps), "Messages tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, __spreadValues({ value: "settings" }, panelProps), "Settings tab content"));
}
const code = `
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}`;
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    {
      prop: "variant",
      type: "segmented",
      initialValue: "default",
      libraryValue: "default",
      data: [
        { value: "default", label: "Default" },
        { value: "outline", label: "Outline" },
        { value: "pills", label: "Pills" }
      ]
    },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    {
      prop: "orientation",
      type: "segmented",
      initialValue: "horizontal",
      libraryValue: "horizontal",
      data: [
        { value: "horizontal", label: "Horizontal" },
        { value: "vertical", label: "Vertical" }
      ]
    }
  ]
};

exports.usage = usage;
//# sourceMappingURL=Tabs.demo.usage.js.map
