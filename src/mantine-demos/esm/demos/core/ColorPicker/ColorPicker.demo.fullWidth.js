import React from 'react';
import { ColorPicker } from '@mantine/core';

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ColorPicker, { fullWidth: true, size: "lg", format: "rgba" });
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

export { fullWidth };
//# sourceMappingURL=ColorPicker.demo.fullWidth.js.map
