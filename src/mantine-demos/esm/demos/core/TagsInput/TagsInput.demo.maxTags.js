import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Press Enter to submit a tag",
      description: "Add up to 3 tags",
      placeholder: "Enter tag",
      maxTags: 3,
      defaultValue: ["first", "second"]
    }
  );
}
const maxTags = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { maxTags };
//# sourceMappingURL=TagsInput.demo.maxTags.js.map
