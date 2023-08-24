import React from 'react';
import { List } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(List, __spreadValues({}, props), /* @__PURE__ */ React.createElement(List.Item, null, "Clone or download repository from GitHub"), /* @__PURE__ */ React.createElement(List.Item, null, "Install dependencies with yarn"), /* @__PURE__ */ React.createElement(List.Item, null, "To start development server run npm start command"), /* @__PURE__ */ React.createElement(List.Item, null, "Run tests to make sure your changes do not break the build"), /* @__PURE__ */ React.createElement(List.Item, null, "Submit a pull request once you are done"));
}
const code = `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List{{props}}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      prop: "type",
      type: "segmented",
      data: [
        { value: "unordered", label: "Unordered" },
        { value: "ordered", label: "Ordered" }
      ],
      initialValue: "unordered",
      libraryValue: "unordered"
    },
    { prop: "size", type: "size", libraryValue: "md", initialValue: "md" },
    { prop: "withPadding", type: "boolean", libraryValue: false, initialValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=List.demo.configurator.js.map
