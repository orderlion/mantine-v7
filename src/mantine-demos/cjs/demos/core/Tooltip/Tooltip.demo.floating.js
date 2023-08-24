'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip.Floating, { label: "Floating tooltip" }, /* @__PURE__ */ React__default.createElement(core.Box, { p: "xl", bg: "var(--mantine-color-blue-light)", style: { cursor: "default" } }, "Hover over the box to see tooltip"));
}
const floating = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.floating = floating;
//# sourceMappingURL=Tooltip.demo.floating.js.map
