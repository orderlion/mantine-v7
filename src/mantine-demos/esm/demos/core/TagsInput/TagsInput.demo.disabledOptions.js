import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Some tags are disabled"
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
    TagsInput,
    {
      label: "Enter tags",
      placeholder: "Some tags are disabled",
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
//# sourceMappingURL=TagsInput.demo.disabledOptions.js.map
