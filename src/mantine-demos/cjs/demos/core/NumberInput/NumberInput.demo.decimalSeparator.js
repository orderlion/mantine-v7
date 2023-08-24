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
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Custom decimal separator",
      placeholder: "You can change it",
      decimalSeparator: ",",
      defaultValue: 20.573
    }
  );
}
const decimalSeparator = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.decimalSeparator = decimalSeparator;
//# sourceMappingURL=NumberInput.demo.decimalSeparator.js.map
