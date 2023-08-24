import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, { disabled: true, label: "Disabled input", placeholder: "Disabled input" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=FileInput.demo.disabled.js.map
