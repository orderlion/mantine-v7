import React from 'react';
import { Group, ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const code = `
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", disabled: true, "aria-label": "Disabled and not interactive" }, /* @__PURE__ */ React.createElement(IconHeart, null)), /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", "data-disabled": true, "aria-label": "Has disabled styles but still interactive" }, /* @__PURE__ */ React.createElement(IconHeart, null)));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=ActionIcon.demo.disabled.js.map
