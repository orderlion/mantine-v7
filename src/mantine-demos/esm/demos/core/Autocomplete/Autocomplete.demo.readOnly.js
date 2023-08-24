import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Autocomplete,
    {
      label: "Your favorite library",
      placeholder: "Pick value or enter anything",
      data: ["React", "Angular", "Vue", "Svelte"],
      readOnly: true
    }
  );
}
const readOnly = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { readOnly };
//# sourceMappingURL=Autocomplete.demo.readOnly.js.map
