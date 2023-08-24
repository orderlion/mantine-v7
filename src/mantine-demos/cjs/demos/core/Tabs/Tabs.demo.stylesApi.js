'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var stylesApi$1 = require('@mantine/styles-api');

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
const code = `
import { Tabs, rem } from '@mantine/core';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
`;
function Demo(props) {
  const iconStyle = { width: core.rem(12), height: core.rem(12) };
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadValues({ defaultValue: "gallery" }, props), /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "gallery", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { style: iconStyle }) }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "messages", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, { style: iconStyle }) }, "Messages"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "settings", rightSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, { style: iconStyle }) }, "Settings")), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "gallery", pt: "xs" }, "Gallery tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "messages", pt: "xs" }, "Messages tab content"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "settings", pt: "xs" }, "Settings tab content"));
}
const stylesApi = {
  type: "styles-api",
  data: stylesApi$1.TabsStylesApi,
  component: Demo,
  centered: true,
  maxWidth: "100%",
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Tabs.demo.stylesApi.js.map
