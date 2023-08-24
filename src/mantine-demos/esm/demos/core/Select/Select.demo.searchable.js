import React from 'react';
import { Select } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    Select,
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

export { searchable };
//# sourceMappingURL=Select.demo.searchable.js.map
