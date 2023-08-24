import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings" disabled>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tabs, { defaultValue: "chat" }, /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "chat" }, "Chat"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "settings", disabled: true }, "Settings"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "account" }, "Account")));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=Tabs.demo.disabled.js.map
