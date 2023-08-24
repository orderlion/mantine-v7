import React from 'react';
import { Switch, Group } from '@mantine/core';

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
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(Switch.Group, __spreadValues({ defaultValue: ["react"] }, props), /* @__PURE__ */ React.createElement(Group, { mt: "xs" }, /* @__PURE__ */ React.createElement(Switch, { value: "react", label: "React" }), /* @__PURE__ */ React.createElement(Switch, { value: "svelte", label: "Svelte" }), /* @__PURE__ */ React.createElement(Switch, { value: "ng", label: "Angular" }), /* @__PURE__ */ React.createElement(Switch, { value: "vue", label: "Vue" })));
}
const groupConfigurator = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "label",
      type: "string",
      initialValue: "Select your favorite framework/library",
      libraryValue: ""
    },
    { prop: "description", type: "string", initialValue: "This is anonymous", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "withAsterisk", type: "boolean", initialValue: true, libraryValue: false }
  ]
};

export { groupConfigurator };
//# sourceMappingURL=Switch.demo.groupConfigurator.js.map
