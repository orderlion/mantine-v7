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

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`;
function Demo() {
  const rows = elements.map((element) => /* @__PURE__ */ React.createElement(Table.Tr, { key: element.name }, /* @__PURE__ */ React.createElement(Table.Td, null, element.position), /* @__PURE__ */ React.createElement(Table.Td, null, element.name), /* @__PURE__ */ React.createElement(Table.Td, null, element.symbol), /* @__PURE__ */ React.createElement(Table.Td, null, element.mass)));
  return /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement(Table.Thead, null, /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Th, null, "Element position"), /* @__PURE__ */ React.createElement(Table.Th, null, "Element name"), /* @__PURE__ */ React.createElement(Table.Th, null, "Symbol"), /* @__PURE__ */ React.createElement(Table.Th, null, "Atomic mass"))), /* @__PURE__ */ React.createElement(Table.Tbody, null, rows));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { Demo, usage };
//# sourceMappingURL=Table.demo.usage.js.map
