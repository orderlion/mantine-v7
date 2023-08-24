import React from 'react';
import { Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Menu, { transitionProps: { transition: "rotate-right", duration: 150 } }, /* @__PURE__ */ React.createElement(DemoMenuItems, null));
}
const transitions = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { transitions };
//# sourceMappingURL=Menu.demo.transitions.js.map
