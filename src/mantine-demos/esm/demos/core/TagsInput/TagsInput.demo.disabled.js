import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Disabled",
      placeholder: "Enter tag",
      disabled: true,
      defaultValue: ["First", "Second"]
    }
  );
}
const disabled = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { disabled };
//# sourceMappingURL=TagsInput.demo.disabled.js.map
