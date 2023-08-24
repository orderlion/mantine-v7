import React from 'react';
import { Popover, Button, Text } from '@mantine/core';

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Popover, { width: "target", position: "bottom", withArrow: true, shadow: "md" }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, { w: 280 }, "Toggle popover")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "This popover has same width as target, it is useful when you are building input dropdowns")));
}
const sameWidth = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { sameWidth };
//# sourceMappingURL=Popover.demo.sameWidth.js.map
