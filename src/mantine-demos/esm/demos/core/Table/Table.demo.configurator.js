import React from 'react';
import { Table } from '@mantine/core';
import { elements } from './_data.js';

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
  return /* @__PURE__ */ React.createElement(Table, __spreadValues({}, props), /* @__PURE__ */ React.createElement(Table.Thead, null, /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Th, null, "Element position"), /* @__PURE__ */ React.createElement(Table.Th, null, "Element name"), /* @__PURE__ */ React.createElement(Table.Th, null, "Symbol"), /* @__PURE__ */ React.createElement(Table.Th, null, "Atomic mass"))), /* @__PURE__ */ React.createElement(Table.Tbody, null, elements.map((element) => /* @__PURE__ */ React.createElement(Table.Tr, { key: element.name }, /* @__PURE__ */ React.createElement(Table.Td, null, element.position), /* @__PURE__ */ React.createElement(Table.Td, null, element.name), /* @__PURE__ */ React.createElement(Table.Td, null, element.symbol), /* @__PURE__ */ React.createElement(Table.Td, null, element.mass)))));
}
const code = `
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    { prop: "striped", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "highlightOnHover", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "withTableBorder", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "withColumnBorders", type: "boolean", initialValue: false, libraryValue: false },
    { prop: "withRowBorders", type: "boolean", initialValue: true, libraryValue: true }
  ]
};

export { configurator };
//# sourceMappingURL=Table.demo.configurator.js.map
