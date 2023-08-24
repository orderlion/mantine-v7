import React from 'react';
import { Tabs } from '@mantine/core';

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
  const panelProps = props.placement === "left" ? { pl: "xs" } : { pr: "xs" };
  return /* @__PURE__ */ React.createElement(Tabs, __spreadValues({ defaultValue: "gallery", orientation: "vertical" }, props), /* @__PURE__ */ React.createElement(Tabs.List, null, /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "gallery" }, "Gallery"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "messages" }, "Messages"), /* @__PURE__ */ React.createElement(Tabs.Tab, { value: "settings" }, "Settings")), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({ value: "gallery" }, panelProps), "Gallery tab content"), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({ value: "messages" }, panelProps), "Messages tab content"), /* @__PURE__ */ React.createElement(Tabs.Panel, __spreadValues({ value: "settings" }, panelProps), "Settings tab content"));
}
const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
`;
const placement = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "placement",
      type: "segmented",
      initialValue: "left",
      libraryValue: "left",
      data: ["left", "right"]
    }
  ]
};

export { placement };
//# sourceMappingURL=Tabs.demo.placement.js.map
