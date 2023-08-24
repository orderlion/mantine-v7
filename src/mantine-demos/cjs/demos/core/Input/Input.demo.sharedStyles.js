'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var Input_demo_sharedStyles_module = require('./Input.demo.sharedStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, NativeSelect, MantineThemeProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineThemeProvider>
  );
}
`;
const cssCode = `
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: rem(1px) solid var(--mantine-color-violet-filled);
}
`;
const theme = core.createTheme({
  components: {
    Input: core.Input.extend({
      classNames: {
        input: Input_demo_sharedStyles_module['default'].input
      }
    }),
    InputWrapper: core.Input.Wrapper.extend({
      classNames: {
        label: Input_demo_sharedStyles_module['default'].label
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Text input", placeholder: "Text input" }), /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      mt: "md",
      label: "Native select",
      placeholder: "Native select",
      data: ["React", "Angular", "Vue", "Svelte"]
    }
  ));
}
const sharedStyles = {
  type: "code",
  component: Demo,
  centered: true,
  maxWidth: 340,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

exports.sharedStyles = sharedStyles;
//# sourceMappingURL=Input.demo.sharedStyles.js.map
