import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
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
    Select,
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
//# sourceMappingURL=Select.demo.limit.js.map
