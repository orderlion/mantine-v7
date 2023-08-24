'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`;
const theme = core.createTheme({
  cursorType: "pointer"
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Checkbox, { label: "Default cursor" }), /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(
    core.Checkbox,
    {
      label: "Pointer cursor",
      mt: "md",
      styles: { input: { cursor: "pointer" }, label: { cursor: "pointer" } }
    }
  )));
}
const cursorType = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.cursorType = cursorType;
//# sourceMappingURL=Theming.demo.cursorType.js.map
