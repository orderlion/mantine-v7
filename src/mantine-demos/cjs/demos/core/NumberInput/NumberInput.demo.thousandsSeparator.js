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
      label="With thousands separator"
      placeholder="Thousands are separated with coma"
      thousandSeparator=","
      defaultValue={1_000_000}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "With thousands separator",
      placeholder: "Thousands are separated with coma",
      thousandSeparator: ",",
      defaultValue: 1e6
    }
  );
}
const thousandsSeparator = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.thousandsSeparator = thousandsSeparator;
//# sourceMappingURL=NumberInput.demo.thousandsSeparator.js.map
