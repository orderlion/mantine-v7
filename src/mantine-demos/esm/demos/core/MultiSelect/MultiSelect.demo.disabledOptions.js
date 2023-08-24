import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
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
      data: [
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "vue", label: "Vue", disabled: true },
        { value: "svelte", label: "Svelte", disabled: true }
      ]
    }
  );
}
const disabledOptions = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { disabledOptions };
//# sourceMappingURL=MultiSelect.demo.disabledOptions.js.map
