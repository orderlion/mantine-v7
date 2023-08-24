import React from 'react';
import { createTheme, ActionIcon, MantineThemeProvider, Group, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './ActionIcon.demo.customSize.module.css.js';

const code = `
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
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
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`;
const cssCode = `
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
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
  return /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(ActionIcon, { size: "xxs", "aria-label": "Custom xxs size" }, /* @__PURE__ */ React.createElement(IconHeart, { style: { width: rem(10), height: rem(10) } })), /* @__PURE__ */ React.createElement(ActionIcon, { size: "xxl", "aria-label": "Custom xxl size" }, /* @__PURE__ */ React.createElement(IconHeart, { style: { width: rem(32), height: rem(32) } }))));
}
const customSize = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

export { customSize };
//# sourceMappingURL=ActionIcon.demo.customSize.js.map
