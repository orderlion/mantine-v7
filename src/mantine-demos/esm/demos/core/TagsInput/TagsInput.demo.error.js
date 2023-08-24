import React from 'react';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={['React', 'Angular']}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={['React', 'Angular']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      label: "Boolean error",
      placeholder: "Boolean error",
      error: true,
      defaultValue: ["React", "Angular"]
    }
  ), /* @__PURE__ */ React.createElement(
    TagsInput,
    {
      mt: "md",
      label: "With error message",
      placeholder: "With error message",
      error: "Invalid name",
      defaultValue: ["React", "Angular"]
    }
  ));
}
const error = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { error };
//# sourceMappingURL=TagsInput.demo.error.js.map
