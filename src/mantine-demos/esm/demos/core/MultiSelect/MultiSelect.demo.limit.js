import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`;
const largeData = Array(1e5).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(
    MultiSelect,
    {
      label: "100 000 options autocomplete",
      placeholder: "Use limit to optimize performance",
      limit: 5,
      data: largeData,
      searchable: true
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
//# sourceMappingURL=MultiSelect.demo.limit.js.map
