import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover, Button, Text } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(Popover, { width: 200, position: "bottom", withArrow: true, shadow: "md", opened }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, { onMouseEnter: open, onMouseLeave: close }, "Hover to see popover")), /* @__PURE__ */ React.createElement(Popover.Dropdown, { style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "This popover is shown when user hovers the target element")));
}
const hover = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { hover };
//# sourceMappingURL=Popover.demo.hover.js.map
