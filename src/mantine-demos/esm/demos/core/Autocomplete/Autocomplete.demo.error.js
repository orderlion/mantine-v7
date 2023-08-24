import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
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
    Autocomplete,
    {
      label: "Boolean error",
      placeholder: "Boolean error",
      error: true,
      data: ["React", "Angular", "Vue", "Svelte"]
    }
  ), /* @__PURE__ */ React.createElement(
    Autocomplete,
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
//# sourceMappingURL=Autocomplete.demo.error.js.map
