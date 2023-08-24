import React from 'react';
import { createTheme, Input, MantineThemeProvider, TextInput, NativeSelect } from '@mantine/core';

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
const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: "filled"
      }
    }),
    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"]
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Text input",
      placeholder: "Text input",
      description: "Description below the input"
    }
  ), /* @__PURE__ */ React.createElement(
    NativeSelect,
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

export { defaultProps };
//# sourceMappingURL=Input.demo.defaultProps.js.map
