'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineThemeProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineThemeProvider>
      <Group>
        <Button>Default button</Button>

        <MantineThemeProvider theme={{ primaryColor: 'red' }}>
          <Button>Inside MantineThemeProvider</Button>
        </MantineThemeProvider>
      </Group>
    </MantineThemeProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, null, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Default button"), /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme: { primaryColor: "red" } }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Inside MantineThemeProvider"))));
}
const themeProvider = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.themeProvider = themeProvider;
//# sourceMappingURL=Theming.demo.themeProvider.js.map
