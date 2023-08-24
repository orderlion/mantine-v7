import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TagsInput, { label: "Press Enter to submit a tag", placeholder: "Enter tag" });
}
const usage = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { usage };
//# sourceMappingURL=TagsInput.demo.usage.js.map
