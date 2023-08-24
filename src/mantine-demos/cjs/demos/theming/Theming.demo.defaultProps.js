'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
`;
const theme = core.createTheme({
  components: {
    Button: core.Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "outline"
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Default button"), /* @__PURE__ */ React__default.createElement(core.Button, { color: "red", variant: "filled" }, "Button with props")));
}
const defaultProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.defaultProps = defaultProps;
//# sourceMappingURL=Theming.demo.defaultProps.js.map
