'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.Menu, { width: 200, shadow: "md" }, /* @__PURE__ */ React__default.createElement(core.Menu.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle menu")), /* @__PURE__ */ React__default.createElement(core.Menu.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Menu.Item, { component: "a", href: "https://mantine.dev" }, "Mantine website"), /* @__PURE__ */ React__default.createElement(
    core.Menu.Item,
    {
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, { style: { width: core.rem(14), height: core.rem(14) } }),
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

exports.component = component;
//# sourceMappingURL=Menu.demo.component.js.map
