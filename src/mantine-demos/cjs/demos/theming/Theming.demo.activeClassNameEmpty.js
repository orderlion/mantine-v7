'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme: { activeClassName: "" } }, /* @__PURE__ */ React__default.createElement(core.Button, null, "No active styles"));
}
const activeClassNameEmpty = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.activeClassNameEmpty = activeClassNameEmpty;
//# sourceMappingURL=Theming.demo.activeClassNameEmpty.js.map
