import React from 'react';
import { MantineThemeProvider, Group, Button } from '@mantine/core';

const code = `
import { MantineThemeProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineThemeProvider>
      <Group>
        <Button>Default button</Button>

        <MantineThemeProvider theme={{ primaryColor: 'red' }}>
          <Button>Inside MantineThemeProvider</Button>
        </MantineThemeProvider>
      </Group>
    </MantineThemeProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, null, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Button, null, "Default button"), /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme: { primaryColor: "red" } }, /* @__PURE__ */ React.createElement(Button, null, "Inside MantineThemeProvider"))));
}
const themeProvider = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { themeProvider };
//# sourceMappingURL=Theming.demo.themeProvider.js.map
