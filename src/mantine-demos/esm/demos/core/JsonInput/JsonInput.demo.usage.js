import React from 'react';
import { JsonInput } from '@mantine/core';

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    JsonInput,
    {
      maw: 400,
      mx: "auto",
      label: "Your package.json",
      placeholder: "Textarea will autosize to fit the content",
      validationError: "Invalid JSON",
      formatOnBlur: true,
      autosize: true,
      minRows: 4
    }
  );
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=JsonInput.demo.usage.js.map
