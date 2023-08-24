import React from 'react';
import { Group, HoverCard, Button, Text } from '@mantine/core';

const code = `
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(HoverCard, { width: 280, shadow: "md" }, /* @__PURE__ */ React.createElement(HoverCard.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Hover to reveal the card")), /* @__PURE__ */ React.createElement(HoverCard.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"))));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=HoverCard.demo.usage.js.map
