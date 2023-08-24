import React from 'react';
import { MultiSelect } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    MultiSelect,
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

export { sort };
//# sourceMappingURL=MultiSelect.demo.sort.js.map
