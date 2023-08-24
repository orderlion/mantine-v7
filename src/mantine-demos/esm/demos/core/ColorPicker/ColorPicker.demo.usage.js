import React, { useState } from 'react';
import { Stack, ColorPicker, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorPicker, Text, Stack } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Stack align="center">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Stack>
  );
}
`;
function Demo() {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(ColorPicker, { format: "rgba", value, onChange }), /* @__PURE__ */ React.createElement(Text, null, value));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=ColorPicker.demo.usage.js.map
