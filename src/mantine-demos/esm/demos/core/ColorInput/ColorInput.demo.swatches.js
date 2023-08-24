import React from 'react';
import { DEFAULT_THEME, ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors).map((color) => `'${DEFAULT_THEME.colors[color][6]}'`).join(", ")}]}
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
      swatches: Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])
    }
  );
}
const swatches = {
  type: "code",
  component: Demo,
  code
};

export { swatches };
//# sourceMappingURL=ColorInput.demo.swatches.js.map
