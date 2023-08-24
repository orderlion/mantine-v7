import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
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
    Autocomplete,
    {
      label: "Your country",
      placeholder: "Pick value or enter anything",
      data: ["Great Britain", "Russian Federation", "United States"],
      filter: optionsFilter
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
//# sourceMappingURL=Autocomplete.demo.search.js.map
