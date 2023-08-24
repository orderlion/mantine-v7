'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`;
const optionsFilter = ({ options, search: search2 }) => {
  const splittedSearch = search2.toLowerCase().trim().split(" ");
  return options.filter((option) => {
    const words = option.label.toLowerCase().trim().split(" ");
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Select,
    {
      label: "Your country",
      placeholder: "Pick value",
      data: ["Great Britain", "Russian Federation", "United States"],
      filter: optionsFilter,
      searchable: true
    }
  );
}
const search = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.search = search;
//# sourceMappingURL=Select.demo.search.js.map
