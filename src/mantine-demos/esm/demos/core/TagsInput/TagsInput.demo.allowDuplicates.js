import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Press Enter to submit a tag",
      placeholder: "Duplicates are allowed",
      allowDuplicates: true
    }
  );
}
const allowDuplicates = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { allowDuplicates };
//# sourceMappingURL=TagsInput.demo.allowDuplicates.js.map
