import React from 'react';
import { DEFAULT_THEME, Stack, ColorPicker } from '@mantine/core';

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors).map((color) => `'${DEFAULT_THEME.colors[color][6]}'`).join(", ")}]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(
    ColorPicker,
    {
      format: "hex",
      defaultValue: "rgba(50, 151, 194, 1)",
      swatches: Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])
    }
  ));
}
const swatches = {
  type: "code",
  component: Demo,
  code
};

export { swatches };
//# sourceMappingURL=ColorPicker.demo.swatches.js.map
