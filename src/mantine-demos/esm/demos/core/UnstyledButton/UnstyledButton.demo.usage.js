import React from 'react';
import { UnstyledButton } from '@mantine/core';

const code = `
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(UnstyledButton, null, "Button without styles");
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { usage };
//# sourceMappingURL=UnstyledButton.demo.usage.js.map
