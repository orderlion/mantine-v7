import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ColorInput, { disabled: true, label: "Disabled input", placeholder: "Disabled input" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=ColorInput.demo.disabled.js.map
