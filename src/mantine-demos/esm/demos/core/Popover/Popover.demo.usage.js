import React from 'react';
import { Popover, Button, Text } from '@mantine/core';

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Popover, { width: 200, position: "bottom", withArrow: true, shadow: "md" }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle popover")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "xs" }, "This is uncontrolled popover, it is opened when button is clicked")));
}
const usage = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { usage };
//# sourceMappingURL=Popover.demo.usage.js.map
