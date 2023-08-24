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
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "You cannot enter number less than 0 or greater than 100",
      placeholder: "You cannot enter number less than 0 or greater than 100",
      clampBehavior: "strict",
      min: 0,
      max: 100
    }
  );
}
const strictClamp = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.strictClamp = strictClamp;
//# sourceMappingURL=NumberInput.demo.strictClamp.js.map
