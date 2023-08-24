import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, RingProgress, Text, Center, ActionIcon, rem } from '@mantine/core';

const code = `
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    RingProgress,
    {
      sections: [{ value: 40, color: "blue" }],
      label: /* @__PURE__ */ React.createElement(Text, { c: "blue", fw: 700, ta: "center", size: "xl" }, "40%")
    }
  ), /* @__PURE__ */ React.createElement(
    RingProgress,
    {
      sections: [{ value: 100, color: "teal" }],
      label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(ActionIcon, { color: "teal", variant: "light", radius: "xl", size: "xl" }, /* @__PURE__ */ React.createElement(IconCheck, { style: { width: rem(22), height: rem(22) } })))
    }
  ));
}
const label = {
  type: "code",
  code,
  component: Demo
};

export { label };
//# sourceMappingURL=RingProgress.demo.label.js.map
