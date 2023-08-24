import React from 'react';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Button with tooltip"));
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { usage };
//# sourceMappingURL=Tooltip.demo.usage.js.map
