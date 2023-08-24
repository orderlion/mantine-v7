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
      readOnly
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
//# sourceMappingURL=Select.demo.readOnly.js.map
