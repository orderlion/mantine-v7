import React from 'react';
import { IconBrandMantine } from '@tabler/icons-react';
import { rem } from '@mantine/core';

const code = `
import { rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    IconBrandMantine,
    {
      style: { width: rem(80), height: rem(80) },
      stroke: 1.5,
      color: "var(--mantine-color-blue-filled)"
    }
  );
}
const icon = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { icon };
//# sourceMappingURL=Guides.demo.icon.js.map
