import React from 'react';
import { Menu, Button, rem } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';

const code = `
import { Menu, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Menu, null, /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(Button, null, "Toggle menu")), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Label, null, "Application"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconSettings, { style: { width: rem(14), height: rem(14) } }) }, "Settings"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconMessageCircle, { style: { width: rem(14), height: rem(14) } }) }, "Messages"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconPhoto, { style: { width: rem(14), height: rem(14) } }) }, "Gallery"), /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconSearch, { style: { width: rem(14), height: rem(14) } }),
      disabled: true
    },
    "Search"
  ), /* @__PURE__ */ React.createElement(Menu.Divider, null), /* @__PURE__ */ React.createElement(Menu.Label, null, "Danger zone"), /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconArrowsLeftRight, { style: { width: rem(14), height: rem(14) } })
    },
    "Transfer my data"
  ), /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      color: "red",
      leftSection: /* @__PURE__ */ React.createElement(IconTrash, { style: { width: rem(14), height: rem(14) } })
    },
    "Delete my account"
  )));
}
const disabled = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { disabled };
//# sourceMappingURL=Menu.demo.disabled.js.map
