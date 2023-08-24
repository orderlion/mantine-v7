'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.FileInput, { disabled: true, label: "Disabled input", placeholder: "Disabled input" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=FileInput.demo.disabled.js.map
