import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`;
const data = Array(100).fill(0).map((_, index) => `Option ${index}`);
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Autocomplete,
    {
      label: "With scroll area (default)",
      placeholder: "Pick value or enter anything",
      data,
      maxDropdownHeight: 200
    }
  ), /* @__PURE__ */ React.createElement(
    Autocomplete,
    {
      label: "With native scroll",
      placeholder: "Pick value or enter anything",
      data,
      withScrollArea: false,
      styles: { dropdown: { maxHeight: 200, overflowY: "auto" } },
      mt: "md"
    }
  ));
}
const scrollArea = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { scrollArea };
//# sourceMappingURL=Autocomplete.demo.scrollArea.js.map
