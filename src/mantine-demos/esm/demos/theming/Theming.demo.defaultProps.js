import React from 'react';
import { createTheme, Button, MantineThemeProvider, Group } from '@mantine/core';

const code = `
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
`;
const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "outline"
      }
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, null, "Default button"), /* @__PURE__ */ React.createElement(Button, { color: "red", variant: "filled" }, "Button with props")));
}
const defaultProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { defaultProps };
//# sourceMappingURL=Theming.demo.defaultProps.js.map
