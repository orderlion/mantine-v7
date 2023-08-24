'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Center, { maw: 400, h: 100, bg: "var(--mantine-color-gray-light)" }, /* @__PURE__ */ React__default.createElement(core.Box, { bg: "var(--mantine-color-blue-light)" }, "All elements inside Center are centered"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Center.demo.usage.js.map
