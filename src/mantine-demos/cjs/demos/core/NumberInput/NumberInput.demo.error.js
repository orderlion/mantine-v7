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
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.NumberInput, { label: "Boolean error", placeholder: "Boolean error", error: true }), /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      mt: "md",
      label: "With error message",
      placeholder: "With error message",
      error: "Invalid name"
    }
  ));
}
const error = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.error = error;
//# sourceMappingURL=NumberInput.demo.error.js.map
