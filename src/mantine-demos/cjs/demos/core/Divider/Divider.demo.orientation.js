'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"), /* @__PURE__ */ React__default.createElement(core.Divider, { orientation: "vertical" }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"), /* @__PURE__ */ React__default.createElement(core.Divider, { size: "sm", orientation: "vertical" }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"), /* @__PURE__ */ React__default.createElement(core.Divider, { size: "md", orientation: "vertical" }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"), /* @__PURE__ */ React__default.createElement(core.Divider, { size: "lg", orientation: "vertical" }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"), /* @__PURE__ */ React__default.createElement(core.Divider, { size: "xl", orientation: "vertical" }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Label"));
}
const orientation = {
  type: "code",
  code,
  component: Demo
};

exports.orientation = orientation;
//# sourceMappingURL=Divider.demo.orientation.js.map
