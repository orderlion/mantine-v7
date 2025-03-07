import React from 'react';
import { Input } from '@mantine/core';
import classes from './Styles.demo.customVariant.module.css.js';

const code = `
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`;
const cssCode = `
.input {
  &[data-variant='underline'] {
    border-bottom: rem(2px) solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { classNames: classes, variant: "underline", placeholder: "Underline input" }), /* @__PURE__ */ React.createElement(Input, { classNames: classes, variant: "filled", placeholder: "Filled input", mt: "md" }));
}
const customVariant = {
  type: "code",
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { customVariant };
//# sourceMappingURL=Styles.demo.customVariant.js.map
