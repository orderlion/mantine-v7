'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`;
const theme = core.createTheme({
  components: {
    Input: core.Input.extend({
      defaultProps: {
        variant: "filled"
      }
    }),
    InputWrapper: core.Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"]
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineThemeProvider, { theme }, /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "Text input",
      placeholder: "Text input",
      description: "Description below the input"
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      mt: "md",
      label: "Native select",
      placeholder: "Native select",
      data: ["React", "Angular", "Vue", "Svelte"],
      description: "Description below the input"
    }
  ));
}
const defaultProps = {
  type: "code",
  component: Demo,
  centered: true,
  maxWidth: 340,
  code
};

exports.defaultProps = defaultProps;
//# sourceMappingURL=Input.demo.defaultProps.js.map
