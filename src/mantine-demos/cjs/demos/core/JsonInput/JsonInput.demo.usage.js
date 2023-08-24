'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.JsonInput,
    {
      maw: 400,
      mx: "auto",
      label: "Your package.json",
      placeholder: "Textarea will autosize to fit the content",
      validationError: "Invalid JSON",
      formatOnBlur: true,
      autosize: true,
      minRows: 4
    }
  );
}
const usage = {
  type: "code",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=JsonInput.demo.usage.js.map
