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
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Select,
    {
      label: "Your favorite library",
      placeholder: "Pick value",
      data: ["React", "Angular", "Vue", "Svelte"],
      searchable: true
    }
  );
}
const searchable = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.searchable = searchable;
//# sourceMappingURL=Select.demo.searchable.js.map
