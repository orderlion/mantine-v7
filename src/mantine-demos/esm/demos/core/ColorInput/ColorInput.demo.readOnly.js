import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    ColorInput,
    {
      maw: 320,
      mx: "auto",
      disallowInput: true,
      placeholder: "Pick color",
      label: "Your favorite color"
    }
  );
}
const readOnly = {
  type: "code",
  component: Demo,
  code
};

export { readOnly };
//# sourceMappingURL=ColorInput.demo.readOnly.js.map
