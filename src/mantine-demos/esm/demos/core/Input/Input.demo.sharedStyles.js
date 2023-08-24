import React from 'react';
import { createTheme, Input, MantineThemeProvider, TextInput, NativeSelect } from '@mantine/core';
import classes from './Input.demo.sharedStyles.module.css.js';

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
const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input
      }
    }),
    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(TextInput, { label: "Text input", placeholder: "Text input" }), /* @__PURE__ */ React.createElement(
    NativeSelect,
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

export { sharedStyles };
//# sourceMappingURL=Input.demo.sharedStyles.js.map
