import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <TagsInput
      label="100 000 options tags input"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
`;
const largeData = Array(1e5).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "100 000 options tags input",
      placeholder: "Use limit to optimize performance",
      limit: 5,
      data: largeData
    }
  );
}
const limit = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { limit };
//# sourceMappingURL=TagsInput.demo.limit.js.map
