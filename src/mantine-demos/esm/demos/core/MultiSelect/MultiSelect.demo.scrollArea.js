import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
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
    MultiSelect,
    {
      label: "With scroll area (default)",
      placeholder: "Pick value",
      data,
      maxDropdownHeight: 200
    }
  ), /* @__PURE__ */ React.createElement(
    MultiSelect,
    {
      label: "With native scroll",
      placeholder: "Pick value",
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
//# sourceMappingURL=MultiSelect.demo.scrollArea.js.map
