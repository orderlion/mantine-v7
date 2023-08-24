'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.PillsInput, { label: "PillsInput" }, /* @__PURE__ */ React__default.createElement(core.Pill.Group, null, /* @__PURE__ */ React__default.createElement(core.Pill, null, "React"), /* @__PURE__ */ React__default.createElement(core.Pill, null, "Vue"), /* @__PURE__ */ React__default.createElement(core.Pill, null, "Svelte"), /* @__PURE__ */ React__default.createElement(core.PillsInput.Field, { placeholder: "Enter tags" })));
}
const usage = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 440,
  centered: true
};

exports.usage = usage;
//# sourceMappingURL=PillsInput.demo.usage.js.map
