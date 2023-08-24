import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, { defaultValue: "chat", activateTabWithKeyboard: false }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "chat" }, "Chat"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "account" }, "Account")), /* @__PURE__ */ React.createElement(Tabs.Panel, { value: "chat", pt: "xs" }, "Chat panel"), /* @__PURE__ */ React.createElement(Tabs.Panel, { value: "gallery", pt: "xs" }, "Gallery panel"), /* @__PURE__ */ React.createElement(Tabs.Panel, { value: "account", pt: "xs" }, "Account panel"));
}
const keyboardActivation = {
  type: "code",
  component: Demo,
  code
};

export { keyboardActivation };
//# sourceMappingURL=Tabs.demo.keyboardActivation.js.map
