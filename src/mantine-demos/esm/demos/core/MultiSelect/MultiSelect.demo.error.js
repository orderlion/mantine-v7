import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    MultiSelect,
    {
      label: "Boolean error",
      placeholder: "Boolean error",
      error: true,
      data: ["React", "Angular", "Vue", "Svelte"]
    }
  ), /* @__PURE__ */ React.createElement(
    MultiSelect,
    {
      mt: "md",
      label: "With error message",
      placeholder: "With error message",
      error: "Invalid name",
      data: ["React", "Angular", "Vue", "Svelte"]
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
//# sourceMappingURL=MultiSelect.demo.error.js.map
