import React from 'react';
import { createTheme, Checkbox, MantineThemeProvider } from '@mantine/core';

const code = `
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`;
const theme = createTheme({
  cursorType: "pointer"
});
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Checkbox, { label: "Default cursor" }), /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(
    Checkbox,
    {
      label: "Pointer cursor",
      mt: "md",
      styles: { input: { cursor: "pointer" }, label: { cursor: "pointer" } }
    }
  )));
}
const cursorType = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { cursorType };
//# sourceMappingURL=Theming.demo.cursorType.js.map
