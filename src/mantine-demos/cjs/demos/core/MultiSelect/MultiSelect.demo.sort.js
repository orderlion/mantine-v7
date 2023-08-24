'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`;
const optionsFilter = ({ options, search }) => {
  const filtered = options.filter(
    (option) => option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );
  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.MultiSelect,
    {
      label: "Your favorite libraries",
      placeholder: "Pick values",
      data: ["4 \u2013 React", "1 \u2013 Angular", "3 \u2013 Vue", "2 \u2013 Svelte"],
      filter: optionsFilter,
      searchable: true
    }
  );
}
const sort = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.sort = sort;
//# sourceMappingURL=MultiSelect.demo.sort.js.map
