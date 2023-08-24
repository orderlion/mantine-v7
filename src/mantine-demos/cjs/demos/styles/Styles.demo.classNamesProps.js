'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var Styles_demo_classNamesProps_module = require('./Styles.demo.classNamesProps.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const code = `
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`;
const cssCode = `
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`;
const theme = core.createTheme({
  components: {
    TextInput: core.TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx__default({ [Styles_demo_classNamesProps_module['default'].labelRequired]: props.required }),
        input: cx__default({ [Styles_demo_classNamesProps_module['default'].inputError]: props.error })
      })
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.TextInput, { required: true, label: "Required input", placeholder: "Required input" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { error: true, label: "Input with error", placeholder: "Input with error", mt: "md" }));
}
const classNamesProps = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.classNamesProps = classNamesProps;
//# sourceMappingURL=Styles.demo.classNamesProps.js.map
