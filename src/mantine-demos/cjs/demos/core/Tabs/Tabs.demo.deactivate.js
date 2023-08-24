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
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, { defaultValue: "chat", allowTabDeactivation: true }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "chat" }, "Chat"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, { value: "account" }, "Account")), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "chat", pt: "xs" }, "Chat panel"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "gallery", pt: "xs" }, "Gallery panel"), /* @__PURE__ */ React__default.createElement(core.Tabs.Panel, { value: "account", pt: "xs" }, "Account panel"));
}
const deactivate = {
  type: "code",
  component: Demo,
  code
};

exports.deactivate = deactivate;
//# sourceMappingURL=Tabs.demo.deactivate.js.map
