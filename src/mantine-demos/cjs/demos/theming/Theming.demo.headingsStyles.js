'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Theming_demo_headingStyles_module = require('./Theming.demo.headingStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Title, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Title: Title.extend({
            classNames: {
              root: classes.heading,
            },
          }),
        },
      }}
    >
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </MantineProvider>
  );
}
`;
const cssCode = `
.heading {
  &:is(h1) {
    font-family: GreycliffCF, sans-serif;
    font-weight: 900;
  }

  &:is(h5, h6) {
    color: var(--mantine-color-dimmed);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.MantineThemeProvider,
    {
      theme: {
        components: {
          Title: core.Title.extend({
            classNames: {
              root: Theming_demo_headingStyles_module['default'].heading
            }
          })
        }
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 1 }, "Heading 1"),
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 2 }, "Heading 2"),
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 3 }, "Heading 3"),
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 4 }, "Heading 4"),
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 5 }, "Heading 5"),
    /* @__PURE__ */ React__default.createElement(core.Title, { order: 6 }, "Heading 6")
  );
}
const headingsStyles = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode }
  ]
};

exports.headingsStyles = headingsStyles;
//# sourceMappingURL=Theming.demo.headingsStyles.js.map
