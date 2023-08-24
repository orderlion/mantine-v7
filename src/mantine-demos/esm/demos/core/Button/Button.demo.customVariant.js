import React from 'react';
import { createTheme, Button, MantineThemeProvider, Group } from '@mantine/core';
import classes from './Button.demo.customVariant.module.css.js';

const code = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;
const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, { variant: "danger" }, "Danger variant"), /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Primary variant")));
}
const customVariant = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { customVariant };
//# sourceMappingURL=Button.demo.customVariant.js.map
