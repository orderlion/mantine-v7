import React, { useState } from 'react';
import { Box, ColorPicker, DEFAULT_THEME, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text, Box } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />
      <Text ta="center" mt={5}>
        {value}
      </Text>
    </Box>
  );
}
`;
function Demo() {
  const [value, onChange] = useState("#fff");
  return /* @__PURE__ */ React.createElement(Box, { maw: 200, mx: "auto" }, /* @__PURE__ */ React.createElement(
    ColorPicker,
    {
      format: "hex",
      value,
      onChange,
      withPicker: false,
      fullWidth: true,
      swatches: [
        ...DEFAULT_THEME.colors.red.slice(0, 7),
        ...DEFAULT_THEME.colors.green.slice(0, 7),
        ...DEFAULT_THEME.colors.blue.slice(0, 7)
      ]
    }
  ), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: 5 }, value));
}
const swatchesOnly = {
  type: "code",
  component: Demo,
  code
};

export { swatchesOnly };
//# sourceMappingURL=ColorPicker.demo.swatchesOnly.js.map
