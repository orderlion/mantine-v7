'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var Theming_demo_colorSchemeControl_module = require('./Theming.demo.colorSchemeControl.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const code = `
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';

function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
`;
const cssCode = `
.icon {
  width: rem(22px);
  height: rem(22px);
}

.dark {
  @mixin dark {
    display: none;
  }

  @mixin light {
    display: block;
  }
}

.light {
  @mixin light {
    display: none;
  }

  @mixin dark {
    display: block;
  }
}
`;
function Demo() {
  const { setColorScheme } = core.useMantineColorScheme();
  const computedColorScheme = core.useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ React__default.createElement(
    core.ActionIcon,
    {
      onClick: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
      variant: "default",
      size: "xl",
      "aria-label": "Toggle color scheme"
    },
    /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, { className: cx__default(Theming_demo_colorSchemeControl_module['default'].icon, Theming_demo_colorSchemeControl_module['default'].light), stroke: 1.5 }),
    /* @__PURE__ */ React__default.createElement(iconsReact.IconMoon, { className: cx__default(Theming_demo_colorSchemeControl_module['default'].icon, Theming_demo_colorSchemeControl_module['default'].dark), stroke: 1.5 })
  );
}
const colorSchemeControl = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode }
  ]
};

exports.colorSchemeControl = colorSchemeControl;
//# sourceMappingURL=Theming.demo.colorSchemeControl.js.map
