import React from 'react';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@mantine/core';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@mantine/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    TimeInput,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconClock, { style: { width: rem(16), height: rem(16) }, stroke: 1.5 })
    }
  );
}
const icon = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=TimeInput.demo.icon.js.map
