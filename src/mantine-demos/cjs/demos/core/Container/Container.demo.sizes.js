'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}

`;
const CONTAINER_SIZES = {
  xxs: core.rem(300),
  xs: core.rem(400),
  sm: core.rem(500),
  md: core.rem(600),
  lg: core.rem(700),
  xl: core.rem(800),
  xxl: core.rem(900)
};
const theme = core.createTheme({
  components: {
    Container: core.Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid ? "100%" : size !== void 0 && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : core.rem(size)
        }
      })
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.Container, { size: "xxs", bg: "var(--mantine-color-blue-light)" }, "Container with custom size"));
}
const sizes = {
  type: "code",
  component: Demo,
  code
};

exports.sizes = sizes;
//# sourceMappingURL=Container.demo.sizes.js.map
