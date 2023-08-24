'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.PinInput, { type: /^[0-3]+/, inputType: "tel", inputMode: "numeric" });
}
const regexp = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.regexp = regexp;
//# sourceMappingURL=PinInput.demo.regexp.js.map
