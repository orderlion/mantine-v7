import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Custom layout",
      placeholder: "Custom layout",
      description: "Description below the input",
      inputWrapperOrder: ["label", "error", "input", "description"]
    }
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      mt: "md",
      label: "Custom layout",
      placeholder: "Custom layout",
      description: "Error and description are",
      error: "both below the input",
      inputWrapperOrder: ["label", "input", "description", "error"]
    }
  ));
}
const inputWrapperOrder = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { inputWrapperOrder };
//# sourceMappingURL=Input.demo.inputWrapperOrder.js.map
