import React from 'react';
import { Tooltip, Button } from '@mantine/core';

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip for disabled button" }, /* @__PURE__ */ React.createElement(Button, { "data-disabled": true, onClick: (event) => event.preventDefault() }, "Disabled button with tooltip"));
}
const disabledTooltip = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { disabledTooltip };
//# sourceMappingURL=Button.demo.disabledTooltip.js.map
