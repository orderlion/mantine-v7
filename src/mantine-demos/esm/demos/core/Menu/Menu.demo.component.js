import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { Menu, Button, rem } from '@mantine/core';

const code = `
import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Menu, { width: 200, shadow: "md" }, /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle menu")), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Item, { component: "a", href: "https://mantine.dev" }, "Mantine website"), /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconExternalLink, { style: { width: rem(14), height: rem(14) } }),
      component: "a",
      href: "https://mantine.dev",
      target: "_blank"
    },
    "External link"
  )));
}
const component = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { component };
//# sourceMappingURL=Menu.demo.component.js.map
