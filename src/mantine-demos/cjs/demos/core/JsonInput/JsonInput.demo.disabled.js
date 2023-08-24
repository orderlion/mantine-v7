'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.JsonInput, { disabled: true, defaultValue: '{ "a": 1, "B": 2 }', label: "Disabled", placeholder: "Disabled" });
}
const disabled = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

exports.disabled = disabled;
//# sourceMappingURL=JsonInput.demo.disabled.js.map
