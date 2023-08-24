'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Decimals are not allowed",
      placeholder: "Do not enter decimal numbers",
      allowDecimal: false
    }
  );
}
const allowDecimal = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.allowDecimal = allowDecimal;
//# sourceMappingURL=NumberInput.demo.allowDecimal.js.map
