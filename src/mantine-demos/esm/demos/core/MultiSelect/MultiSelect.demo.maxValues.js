import React from 'react';
import { MultiSelect } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    MultiSelect,
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

export { maxValues };
//# sourceMappingURL=MultiSelect.demo.maxValues.js.map
