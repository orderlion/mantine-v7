'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const networkStatus = hooks.useNetwork();
  return /* @__PURE__ */ React__default.createElement(core.Table, { maw: 300, layout: "fixed", mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Table.Thead, null, /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Property"), /* @__PURE__ */ React__default.createElement(core.Table.Th, null, "Value"))), /* @__PURE__ */ React__default.createElement(core.Table.Tbody, null, /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, "Online"), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", c: networkStatus.online ? "teal" : "red" }, networkStatus.online ? "Online" : "Offline"))), /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, "rtt"), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, networkStatus.rtt)), /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, "downlink"), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, networkStatus.downlink)), /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, "effectiveType"), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, networkStatus.effectiveType)), /* @__PURE__ */ React__default.createElement(core.Table.Tr, null, /* @__PURE__ */ React__default.createElement(core.Table.Td, null, "saveData"), /* @__PURE__ */ React__default.createElement(core.Table.Td, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", c: networkStatus.saveData ? "teal" : "red" }, networkStatus.saveData ? "true" : "false")))));
}
const useNetworkDemo = {
  type: "code",
  component: Demo,
  code
};

exports.useNetworkDemo = useNetworkDemo;
//# sourceMappingURL=use-network.demo.usage.js.map
