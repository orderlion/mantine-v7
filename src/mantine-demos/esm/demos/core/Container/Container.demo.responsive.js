import React from 'react';
import cx from 'clsx';
import { createTheme, Container, MantineThemeProvider } from '@mantine/core';
import classes from './Container.demo.responsive.module.css.js';

const code = `
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
`;
const cssCode = `
.responsiveContainer {
  max-width: rem(300px);

  @media (min-width: em(400px)) {
    max-width: rem(400px);
  }

  @media (min-width: em(600px)) {
    max-width: rem(600px);
  }
}
`;
const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" })
      })
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Container, { size: "responsive", bg: "var(--mantine-color-blue-light)" }, "Container with responsive size"));
}
const responsive = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { responsive };
//# sourceMappingURL=Container.demo.responsive.js.map
