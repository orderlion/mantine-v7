import React from 'react';
import { Tooltip, ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const code = `
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Tooltip, { label: "Tooltip for disabled button" }, /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", "data-disabled": true, onClick: (event) => event.preventDefault() }, /* @__PURE__ */ React.createElement(IconHeart, null)));
}
const disabledTooltip = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { disabledTooltip };
//# sourceMappingURL=ActionIcon.demo.disabledTooltip.js.map
