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
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Enter value between 10 and 20",
      placeholder: "Don't enter more than 20 and less than 10",
      min: 10,
      max: 20
    }
  );
}
const minMax = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.minMax = minMax;
//# sourceMappingURL=NumberInput.demo.minMax.js.map
