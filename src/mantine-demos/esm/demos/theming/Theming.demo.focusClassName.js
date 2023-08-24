import React from 'react';
import { MantineThemeProvider, Button } from '@mantine/core';
import classes from './Theming.demo.focusClassName.module.css.js';

const tsxCode = `
import { MantineProvider, Button } from '@mantine/core';
import classes from './focus.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ focusClassName: classes.focus }}>
      <Button>Click button to see custom focus ring</Button>
    </MantineProvider>
  );
}
`;
const cssCode = `
/* Use \`&:focus\` when you want focus ring to be visible when control is clicked */
.focus {
  &:focus {
    outline: rem(2px) solid var(--mantine-color-red-filled);
    outline-offset: rem(3px);
  }
}

/* Use \`&:focus-visible\` when you want focus ring to be visible
   only when user navigates with keyboard, for example by pressing Tab key */
.focus-auto {
  &:focus-visible {
    outline: rem(2px) solid var(--mantine-color-red-filled);
    outline-offset: rem(2px);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { inherit: true, theme: { focusClassName: classes.focus } }, /* @__PURE__ */ React.createElement(Button, null, "Click button to see custom focus ring"));
}
const focusClassName = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code: tsxCode },
    { fileName: "focus.module.css", language: "css", code: cssCode }
  ]
};

export { focusClassName };
//# sourceMappingURL=Theming.demo.focusClassName.js.map
