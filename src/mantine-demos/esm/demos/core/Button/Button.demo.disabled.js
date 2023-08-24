import React from 'react';
import { Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Button, { disabled: true }, "Disabled button");
}
const disabled = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=Button.demo.disabled.js.map
