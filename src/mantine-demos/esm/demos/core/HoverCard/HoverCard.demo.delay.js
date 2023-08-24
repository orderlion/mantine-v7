import React from 'react';
import { Group, HoverCard, Button, Text } from '@mantine/core';

const code = `
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(HoverCard, { shadow: "md", openDelay: 1e3 }, /* @__PURE__ */ React.createElement(HoverCard.Target, null, /* @__PURE__ */ React.createElement(Button, null, "1000ms open delay")), /* @__PURE__ */ React.createElement(HoverCard.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "Opened with 1000ms delay"))), /* @__PURE__ */ React.createElement(HoverCard, { shadow: "md", closeDelay: 1e3 }, /* @__PURE__ */ React.createElement(HoverCard.Target, null, /* @__PURE__ */ React.createElement(Button, null, "1000ms close delay")), /* @__PURE__ */ React.createElement(HoverCard.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "Will close with 1000ms delay"))));
}
const delay = {
  type: "code",
  component: Demo,
  code
};

export { delay };
//# sourceMappingURL=HoverCard.demo.delay.js.map
