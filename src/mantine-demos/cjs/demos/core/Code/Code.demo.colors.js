'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Code, { color: "blue.9", c: "white" }, "React.createElement()"), /* @__PURE__ */ React__default.createElement(core.Code, { color: "var(--mantine-color-blue-light)" }, "React.createElement()"));
}
const colors = {
  type: "code",
  code,
  component: Demo
};

exports.colors = colors;
//# sourceMappingURL=Code.demo.colors.js.map
