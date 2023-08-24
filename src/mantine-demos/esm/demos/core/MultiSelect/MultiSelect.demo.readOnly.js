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
      readOnly
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
      readOnly: true
    }
  );
}
const readOnly = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { readOnly };
//# sourceMappingURL=MultiSelect.demo.readOnly.js.map
