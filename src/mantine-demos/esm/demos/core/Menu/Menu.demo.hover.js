import React from 'react';
import { Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Menu, { trigger: "hover", openDelay: 100, closeDelay: 400 }, /* @__PURE__ */ React.createElement(DemoMenuItems, null));
}
const hover = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { hover };
//# sourceMappingURL=Menu.demo.hover.js.map
