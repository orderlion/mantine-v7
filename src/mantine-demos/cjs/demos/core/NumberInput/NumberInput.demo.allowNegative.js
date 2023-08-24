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
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Negative number are not allowed",
      placeholder: "Do not enter negative numbers",
      allowNegative: false
    }
  );
}
const allowNegative = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.allowNegative = allowNegative;
//# sourceMappingURL=NumberInput.demo.allowNegative.js.map
