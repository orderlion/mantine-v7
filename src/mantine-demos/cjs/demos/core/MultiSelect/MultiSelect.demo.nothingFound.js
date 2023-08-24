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
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.MultiSelect,
    {
      label: "Your favorite libraries",
      placeholder: "Pick value",
      data: ["React", "Angular", "Vue", "Svelte"],
      searchable: true,
      nothingFoundMessage: "Nothing found..."
    }
  );
}
const nothingFound = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.nothingFound = nothingFound;
//# sourceMappingURL=MultiSelect.demo.nothingFound.js.map
