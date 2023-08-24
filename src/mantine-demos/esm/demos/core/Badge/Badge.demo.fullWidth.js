import React from 'react';
import { Badge } from '@mantine/core';

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Badge, { fullWidth: true }, "Full width badge");
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

export { fullWidth };
//# sourceMappingURL=Badge.demo.fullWidth.js.map
