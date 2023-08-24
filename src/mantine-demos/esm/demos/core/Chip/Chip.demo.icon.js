import React from 'react';
import { Chip, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const code = `
import { Chip, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Chip,
    {
      icon: /* @__PURE__ */ React.createElement(IconX, { style: { width: rem(16), height: rem(16) } }),
      color: "red",
      variant: "filled",
      defaultChecked: true
    },
    "Forbidden"
  );
}
const icon = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { icon };
//# sourceMappingURL=Chip.demo.icon.js.map
