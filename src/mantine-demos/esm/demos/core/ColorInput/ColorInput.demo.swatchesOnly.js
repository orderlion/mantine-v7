import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

const code = `
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    ColorInput,
    {
      maw: 320,
      mx: "auto",
      placeholder: "Pick color",
      label: "Your favorite color",
      disallowInput: true,
      withPicker: false,
      swatches: [
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue
      ]
    }
  );
}
const swatchesOnly = {
  type: "code",
  component: Demo,
  code
};

export { swatchesOnly };
//# sourceMappingURL=ColorInput.demo.swatchesOnly.js.map
