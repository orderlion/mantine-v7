import React from 'react';
import { Table } from '@mantine/core';
import { elements } from './_data.js';

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
  const rows = elements.map((element) => /* @__PURE__ */ React.createElement(Table.Tr, { key: element.name }, /* @__PURE__ */ React.createElement(Table.Td, null, element.position), /* @__PURE__ */ React.createElement(Table.Td, null, element.name), /* @__PURE__ */ React.createElement(Table.Td, null, element.symbol), /* @__PURE__ */ React.createElement(Table.Td, null, element.mass)));
  const ths = /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Th, null, "Element position"), /* @__PURE__ */ React.createElement(Table.Th, null, "Element name"), /* @__PURE__ */ React.createElement(Table.Th, null, "Symbol"), /* @__PURE__ */ React.createElement(Table.Th, null, "Atomic mass"));
  return /* @__PURE__ */ React.createElement(Table, { captionSide: "bottom" }, /* @__PURE__ */ React.createElement(Table.Caption, null, "Some elements from periodic table"), /* @__PURE__ */ React.createElement(Table.Thead, null, ths), /* @__PURE__ */ React.createElement(Table.Tbody, null, rows), /* @__PURE__ */ React.createElement(Table.Tfoot, null, ths));
}
const captions = {
  type: "code",
  code,
  component: Demo
};

export { Demo, captions };
//# sourceMappingURL=Table.demo.captions.js.map
