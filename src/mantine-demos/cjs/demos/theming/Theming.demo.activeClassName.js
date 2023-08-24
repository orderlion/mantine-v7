'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Theming_demo_activeClassName_module = require('./Theming.demo.activeClassName.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const tsxCode = `
import { MantineProvider, Button } from '@mantine/core';
import classes from './active.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </MantineProvider>
  );
}
`;
const cssCode = `
.active {
  transition: transform 50ms ease-in-out;

  &:active {
    transform: scale(0.97);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme: { activeClassName: Theming_demo_activeClassName_module['default'].active } }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Press me to see active styles"));
}
const activeClassName = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code: tsxCode },
    { fileName: "active.module.css", language: "css", code: cssCode }
  ]
};

exports.activeClassName = activeClassName;
//# sourceMappingURL=Theming.demo.activeClassName.js.map
