import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Button, { fullWidth: true }, "Full width button");
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

export { fullWidth };
//# sourceMappingURL=Button.demo.fullWidth.js.map
