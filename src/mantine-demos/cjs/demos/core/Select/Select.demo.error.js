'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Select,
    {
      label: "Boolean error",
      placeholder: "Boolean error",
      error: true,
      data: ["React", "Angular", "Vue", "Svelte"]
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.Select,
    {
      mt: "md",
      label: "With error message",
      placeholder: "With error message",
      error: "Invalid name",
      data: ["React", "Angular", "Vue", "Svelte"]
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
//# sourceMappingURL=Select.demo.error.js.map
