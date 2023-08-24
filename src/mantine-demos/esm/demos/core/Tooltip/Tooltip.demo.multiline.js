import React from 'react';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      multiline: true,
      w: 220,
      withArrow: true,
      transitionProps: { duration: 200 },
      label: "Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    },
    /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Multiline tooltip")
  );
}
const multiline = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { Demo, multiline };
//# sourceMappingURL=Tooltip.demo.multiline.js.map
