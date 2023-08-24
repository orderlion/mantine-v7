import React from 'react';
import { Group, Button } from '@mantine/core';

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
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Group, __spreadValues({}, props), /* @__PURE__ */ React.createElement(Button, { variant: "default" }, "First"), /* @__PURE__ */ React.createElement(Button, { variant: "default" }, "Second"), /* @__PURE__ */ React.createElement(Button, { variant: "default" }, "Third"));
}
const usage = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      type: "select",
      prop: "justify",
      data: ["flex-start", "center", "space-between", "flex-end"],
      initialValue: "flex-start",
      libraryValue: "flex-start"
    },
    { type: "size", prop: "gap", initialValue: "md", libraryValue: "md" },
    { type: "boolean", prop: "grow", initialValue: false, libraryValue: false }
  ]
};

export { usage };
//# sourceMappingURL=Group.demo.usage.js.map
