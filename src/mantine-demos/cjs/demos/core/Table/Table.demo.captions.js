'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _data = require('./_data.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`;
function Demo() {
  const rows = _data.elements.map((element) => /* @__PURE__ */ React__default.createElement(core.Table.Tr, { key: element.name }, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, element.position), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, element.name), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, element.symbol), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, element.mass)));
  const ths = /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Element position"), /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Element name"), /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Symbol"), /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Atomic mass"));
  return /* @__PURE__ */ React__default.createElement(core.Table, { captionSide: "bottom" }, /* @__PURE__ */ React__default.createElement(core.Table.Caption, null, "Some elements from periodic table"), /* @__PURE__ */ React__default.createElement(core.Table.Thead, null, ths), /* @__PURE__ */ React__default.createElement(core.Table.Tbody, null, rows), /* @__PURE__ */ React__default.createElement(core.Table.Tfoot, null, ths));
}
const captions = {
  type: "code",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.captions = captions;
//# sourceMappingURL=Table.demo.captions.js.map
