import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FileInput, { label: "Boolean error", placeholder: "Boolean error", error: true }), /* @__PURE__ */ React.createElement(
    FileInput,
    {
      mt: "md",
      label: "With error message",
      placeholder: "With error message",
      error: "Invalid name"
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
//# sourceMappingURL=FileInput.demo.error.js.map
