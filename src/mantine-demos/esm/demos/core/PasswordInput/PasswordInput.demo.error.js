import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PasswordInput, { label: "Boolean error", placeholder: "Boolean error", error: true }), /* @__PURE__ */ React.createElement(
    PasswordInput,
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
//# sourceMappingURL=PasswordInput.demo.error.js.map
