import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(TextInput, { disabled: true, label: "Disabled input", placeholder: "Disabled input" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=TextInput.demo.disabled.js.map
