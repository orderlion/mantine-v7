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
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, { defaultValue: "chat", unstyled: true }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "chat" }, "Chat"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "account" }, "Account")), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "chat" }, "Chat panel"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "gallery" }, "Gallery panel"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "account" }, "Account panel"));
}
const unstyled = {
  type: "code",
  component: Demo,
  code
};

exports.unstyled = unstyled;
//# sourceMappingURL=Styles.demo.unstyled.js.map
