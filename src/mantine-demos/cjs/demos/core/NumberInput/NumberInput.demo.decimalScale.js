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
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "You can enter only 2 digits after decimal point",
      placeholder: "Do not enter more that 2",
      decimalScale: 2
    }
  );
}
const decimalScale = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.decimalScale = decimalScale;
//# sourceMappingURL=NumberInput.demo.decimalScale.js.map
