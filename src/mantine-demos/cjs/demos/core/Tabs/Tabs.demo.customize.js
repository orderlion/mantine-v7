'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var Tabs_demo_customize_module = require('./Tabs.demo.customize.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto style={{ width: rem(16), height: rem(16) }} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
const cssCode = `
.tab {
  position: relative;
  border: rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));

  &:first-of-type {
    border-radius: rem(4px) 0 0 rem(4px);

    @mixin rtl {
      border-radius: 0 rem(4px) rem(4px) 0;
    }
  }

  &:last-of-type {
    border-radius: 0 rem(4px) rem(4px) 0;

    @mixin rtl {
      border-radius: rem(4px) 0 0 rem(4px);
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: rem(1px);
    }
  }

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5));
  }

  &[data-active] {
    z-index: 1;
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);

    @mixin hover {
      background-color: var(--mantine-color-blue-filled-hover);
    }
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, { variant: "unstyled", defaultValue: "settings", classNames: Tabs_demo_customize_module['default'] }, /* @__PURE__ */ React__default.createElement(core.Tabs.List, { grow: true }, /* @__PURE__ */ React__default.createElement(
    core.Tabs.Tab,
    {
      value: "settings",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconSettings, { style: { width: core.rem(16), height: core.rem(16) } })
    },
    "Settings"
  ), /* @__PURE__ */ React__default.createElement(
    core.Tabs.Tab,
    {
      value: "messages",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconMessageCircle, { style: { width: core.rem(16), height: core.rem(16) } })
    },
    "Messages"
  ), /* @__PURE__ */ React__default.createElement(
    core.Tabs.Tab,
    {
      value: "gallery",
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, { style: { width: core.rem(16), height: core.rem(16) } })
    },
    "Gallery"
  )));
}
const customize = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.customize = customize;
//# sourceMappingURL=Tabs.demo.customize.js.map
