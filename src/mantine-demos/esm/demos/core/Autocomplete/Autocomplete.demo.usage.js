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
      data: ["React", "Angular", "Vue", "Svelte"]
    }
  );
}
const usage = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { usage };
//# sourceMappingURL=Autocomplete.demo.usage.js.map
