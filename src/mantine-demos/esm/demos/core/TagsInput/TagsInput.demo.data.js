import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Press Enter to submit a tag",
      placeholder: "Pick tag from list",
      data: ["React", "Angular", "Svelte"]
    }
  );
}
const data = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { data };
//# sourceMappingURL=TagsInput.demo.data.js.map
