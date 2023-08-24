'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var Container_demo_responsive_module = require('./Container.demo.responsive.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const code = `
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
`;
const cssCode = `
.responsiveContainer {
  max-width: rem(300px);

  @media (min-width: em(400px)) {
    max-width: rem(400px);
  }

  @media (min-width: em(600px)) {
    max-width: rem(600px);
  }
}
`;
const theme = core.createTheme({
  components: {
    Container: core.Container.extend({
      classNames: (_, { size }) => ({
        root: cx__default({ [Container_demo_responsive_module['default'].responsiveContainer]: size === "responsive" })
      })
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.Container, { size: "responsive", bg: "var(--mantine-color-blue-light)" }, "Container with responsive size"));
}
const responsive = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.responsive = responsive;
//# sourceMappingURL=Container.demo.responsive.js.map
