'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineProvider>
  );
}
`;
const theme = core.createTheme({
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "gradient" }, "Button with custom default gradient"));
}
const defaultGradient = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.defaultGradient = defaultGradient;
//# sourceMappingURL=Theming.demo.defaultGradient.js.map
