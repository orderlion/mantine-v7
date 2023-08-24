import React from 'react';
import { Popover, Button, Text } from '@mantine/core';

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Popover, { width: 200, position: "bottom", clickOutsideEvents: ["mouseup", "touchend"] }, /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle popover")), /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Text, { size: "xs" }, "Popover will be closed with mouseup and touchend events")));
}
const clickOutsideEvents = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { clickOutsideEvents };
//# sourceMappingURL=Popover.demo.clickOutsideEvents.js.map
