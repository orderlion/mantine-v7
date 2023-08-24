import React from 'react';
import { createTheme, ActionIcon, MantineThemeProvider, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './ActionIcon.demo.customVariant.module.css.js';

const code = `
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
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
    ActionIcon: ActionIcon.extend({
      classNames: classes
    })
  }
});
function Demo() {
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", variant: "danger", "aria-label": "Danger variant" }, /* @__PURE__ */ React.createElement(IconHeart, null)), /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", variant: "primary", "aria-label": "Primary variant" }, /* @__PURE__ */ React.createElement(IconHeart, null))));
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
//# sourceMappingURL=ActionIcon.demo.customVariant.js.map
