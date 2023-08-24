'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "xs" }, "Extra small text"), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Small text"), /* @__PURE__ */ React__default.createElement(core.Text, { size: "md" }, "Default text"), /* @__PURE__ */ React__default.createElement(core.Text, { size: "lg" }, "Large text"), /* @__PURE__ */ React__default.createElement(core.Text, { size: "xl" }, "Extra large text"), /* @__PURE__ */ React__default.createElement(core.Text, { fw: 500 }, "Semibold"), /* @__PURE__ */ React__default.createElement(core.Text, { fw: 700 }, "Bold"), /* @__PURE__ */ React__default.createElement(core.Text, { fs: "italic" }, "Italic"), /* @__PURE__ */ React__default.createElement(core.Text, { td: "underline" }, "Underlined"), /* @__PURE__ */ React__default.createElement(core.Text, { td: "line-through" }, "Strikethrough"), /* @__PURE__ */ React__default.createElement(core.Text, { c: "dimmed" }, "Dimmed text"), /* @__PURE__ */ React__default.createElement(core.Text, { c: "blue" }, "Blue text"), /* @__PURE__ */ React__default.createElement(core.Text, { c: "teal.4" }, "Teal 4 text"), /* @__PURE__ */ React__default.createElement(core.Text, { tt: "uppercase" }, "Uppercase"), /* @__PURE__ */ React__default.createElement(core.Text, { tt: "capitalize" }, "capitalized text"), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "Aligned to center"), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "right" }, "Aligned to right"));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=Text.demo.usage.js.map
