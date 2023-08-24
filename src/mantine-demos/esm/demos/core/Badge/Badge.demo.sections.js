import React from 'react';
import { rem, Group, Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const code = `
import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`;
function Demo() {
  const icon = /* @__PURE__ */ React.createElement(IconAt, { style: { width: rem(12), height: rem(12) } });
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Badge, { leftSection: icon }, "With left section"), /* @__PURE__ */ React.createElement(Badge, { rightSection: icon }, "With right section"));
}
const sections = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { sections };
//# sourceMappingURL=Badge.demo.sections.js.map
