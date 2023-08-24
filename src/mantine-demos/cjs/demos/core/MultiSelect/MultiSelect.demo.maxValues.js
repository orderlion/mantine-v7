'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.MultiSelect,
    {
      label: "Your favorite libraries",
      placeholder: "Select up to 2 libraries",
      data: ["React", "Angular", "Vue", "Svelte"],
      maxValues: 2
    }
  );
}
const maxValues = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.maxValues = maxValues;
//# sourceMappingURL=MultiSelect.demo.maxValues.js.map
