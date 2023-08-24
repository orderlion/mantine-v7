import React from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const code = `
import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ActionIcon, { size: 42, variant: "default", "aria-label": "ActionIcon with size as a number" }, /* @__PURE__ */ React.createElement(IconHeart, { style: { width: rem(24), height: rem(24) } }));
}
const size = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { size };
//# sourceMappingURL=ActionIcon.demo.size.js.map
