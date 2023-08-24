import React from 'react';
import { Table, Text } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';

const code = `
import { Text, Table } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';

function Demo() {
  const networkStatus = useNetwork();

  return (
    <Table maw={300} layout="fixed" mx="auto">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Property</Table.Th>
          <Table.Th>Value</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Online</Table.Td>
          <Table.Td>
            <Text size="sm" c={networkStatus.online ? 'teal' : 'red'}>
              {networkStatus.online ? 'Online' : 'Offline'}
            </Text>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>rtt</Table.Td>
          <Table.Td>{networkStatus.rtt}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>downlink</Table.Td>
          <Table.Td>{networkStatus.downlink}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>effectiveType</Table.Td>
          <Table.Td>{networkStatus.effectiveType}</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>saveData</Table.Td>
          <Table.Td>
            <Text size="sm" c={networkStatus.saveData ? 'teal' : 'red'}>
              {networkStatus.saveData ? 'true' : 'false'}
            </Text>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`;
function Demo() {
  const networkStatus = useNetwork();
  return /* @__PURE__ */ React.createElement(Table, { maw: 300, layout: "fixed", mx: "auto" }, /* @__PURE__ */ React.createElement(Table.Thead, null, /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Th, null, "Property"), /* @__PURE__ */ React.createElement(Table.Th, null, "Value"))), /* @__PURE__ */ React.createElement(Table.Tbody, null, /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Td, null, "Online"), /* @__PURE__ */ React.createElement(Table.Td, null, /* @__PURE__ */ React.createElement(Text, { size: "sm", c: networkStatus.online ? "teal" : "red" }, networkStatus.online ? "Online" : "Offline"))), /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Td, null, "rtt"), /* @__PURE__ */ React.createElement(Table.Td, null, networkStatus.rtt)), /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Td, null, "downlink"), /* @__PURE__ */ React.createElement(Table.Td, null, networkStatus.downlink)), /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Td, null, "effectiveType"), /* @__PURE__ */ React.createElement(Table.Td, null, networkStatus.effectiveType)), /* @__PURE__ */ React.createElement(Table.Tr, null, /* @__PURE__ */ React.createElement(Table.Td, null, "saveData"), /* @__PURE__ */ React.createElement(Table.Td, null, /* @__PURE__ */ React.createElement(Text, { size: "sm", c: networkStatus.saveData ? "teal" : "red" }, networkStatus.saveData ? "true" : "false")))));
}
const useNetworkDemo = {
  type: "code",
  component: Demo,
  code
};

export { useNetworkDemo };
//# sourceMappingURL=use-network.demo.usage.js.map
