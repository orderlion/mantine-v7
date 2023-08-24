import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      splitChars={[',', ' ', '|']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Press Enter to submit a tag",
      placeholder: "Enter tag",
      splitChars: [",", " ", "|"]
    }
  );
}
const splitChars = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { splitChars };
//# sourceMappingURL=TagsInput.demo.splitChars.js.map
