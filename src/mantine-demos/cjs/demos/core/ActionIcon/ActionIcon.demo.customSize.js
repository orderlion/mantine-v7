'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var ActionIcon_demo_customSize_module = require('./ActionIcon.demo.customSize.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`;
const cssCode = `
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
}
`;
const theme = core.createTheme({
  components: {
    ActionIcon: core.ActionIcon.extend({
      classNames: ActionIcon_demo_customSize_module['default']
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xxs", "aria-label": "Custom xxs size" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, { style: { width: core.rem(10), height: core.rem(10) } })), /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xxl", "aria-label": "Custom xxl size" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, { style: { width: core.rem(32), height: core.rem(32) } }))));
}
const customSize = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.customSize = customSize;
//# sourceMappingURL=ActionIcon.demo.customSize.js.map
