import React from 'react';
import { MantineThemeProvider, Button } from '@mantine/core';

const code = `
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme: { activeClassName: "" } }, /* @__PURE__ */ React.createElement(Button, null, "No active styles"));
}
const activeClassNameEmpty = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { activeClassNameEmpty };
//# sourceMappingURL=Theming.demo.activeClassNameEmpty.js.map
