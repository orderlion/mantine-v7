'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "Custom layout",
      placeholder: "Custom layout",
      description: "Description below the input",
      inputWrapperOrder: ["label", "error", "input", "description"]
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      mt: "md",
      label: "Custom layout",
      placeholder: "Custom layout",
      description: "Error and description are",
      error: "both below the input",
      inputWrapperOrder: ["label", "input", "description", "error"]
    }
  ));
}
const inputWrapperOrder = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.inputWrapperOrder = inputWrapperOrder;
//# sourceMappingURL=Input.demo.inputWrapperOrder.js.map
