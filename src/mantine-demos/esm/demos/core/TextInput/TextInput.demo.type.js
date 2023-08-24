import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TextInput, { type: "password", label: "Password input", placeholder: "Password input" }), /* @__PURE__ */ React.createElement(TextInput, { mt: "md", type: "date", label: "Date input", placeholder: "Date input" }), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      mt: "md",
      type: "datetime-local",
      label: "Date time input",
      placeholder: "Date time input"
    }
  ));
}
const type = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { type };
//# sourceMappingURL=TextInput.demo.type.js.map
