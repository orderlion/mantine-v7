import React from 'react';
import { createTheme, MantineThemeProvider, Button } from '@mantine/core';

const code = `
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineProvider>
  );
}
`;
const theme = createTheme({
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Button, { variant: "gradient" }, "Button with custom default gradient"));
}
const defaultGradient = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { defaultGradient };
//# sourceMappingURL=Theming.demo.defaultGradient.js.map
