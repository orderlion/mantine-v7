import React from 'react';
import { Select } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    Select,
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

export { search };
//# sourceMappingURL=Select.demo.search.js.map
