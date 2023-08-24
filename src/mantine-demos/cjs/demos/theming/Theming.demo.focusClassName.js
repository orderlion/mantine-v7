'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Theming_demo_focusClassName_module = require('./Theming.demo.focusClassName.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const tsxCode = `
import { MantineProvider, Button } from '@mantine/core';
import classes from './focus.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ focusClassName: classes.focus }}>
      <Button>Click button to see custom focus ring</Button>
    </MantineProvider>
  );
}
`;
const cssCode = `
/* Use \`&:focus\` when you want focus ring to be visible when control is clicked */
.focus {
  &:focus {
    outline: rem(2px) solid var(--mantine-color-red-filled);
    outline-offset: rem(3px);
  }
}

/* Use \`&:focus-visible\` when you want focus ring to be visible
   only when user navigates with keyboard, for example by pressing Tab key */
.focus-auto {
  &:focus-visible {
    outline: rem(2px) solid var(--mantine-color-red-filled);
    outline-offset: rem(2px);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { inherit: true, theme: { focusClassName: Theming_demo_focusClassName_module['default'].focus } }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Click button to see custom focus ring"));
}
const focusClassName = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code: tsxCode },
    { fileName: "focus.module.css", language: "css", code: cssCode }
  ]
};

exports.focusClassName = focusClassName;
//# sourceMappingURL=Theming.demo.focusClassName.js.map
