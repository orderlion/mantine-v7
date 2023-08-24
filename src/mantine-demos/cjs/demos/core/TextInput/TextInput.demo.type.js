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
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.TextInput, { type: "password", label: "Password input", placeholder: "Password input" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { mt: "md", type: "date", label: "Date input", placeholder: "Date input" }), /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      mt: "md",
      type: "datetime-local",
      label: "Date time input",
      placeholder: "Date time input"
    }
  ));
}
const type = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.type = type;
//# sourceMappingURL=TextInput.demo.type.js.map
