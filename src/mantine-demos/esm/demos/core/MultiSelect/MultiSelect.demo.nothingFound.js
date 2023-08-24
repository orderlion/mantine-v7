import React from 'react';
import { MultiSelect } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    MultiSelect,
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

export { nothingFound };
//# sourceMappingURL=MultiSelect.demo.nothingFound.js.map
