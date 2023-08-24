'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, { defaultValue: "chat" }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "chat" }, "Chat"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "settings" }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "account", ml: "auto" }, "Account")));
}
const pull = {
  type: "code",
  component: Demo,
  code
};

exports.pull = pull;
//# sourceMappingURL=Tabs.demo.pull.js.map
