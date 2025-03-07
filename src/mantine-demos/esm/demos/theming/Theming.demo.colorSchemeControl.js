import React from 'react';
import cx from 'clsx';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useMantineColorScheme, useComputedColorScheme, ActionIcon } from '@mantine/core';
import classes from './Theming.demo.colorSchemeControl.module.css.js';

const code = `
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';

function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
`;
const cssCode = `
.icon {
  width: rem(22px);
  height: rem(22px);
}

.dark {
  @mixin dark {
    display: none;
  }

  @mixin light {
    display: block;
  }
}

.light {
  @mixin light {
    display: none;
  }

  @mixin dark {
    display: block;
  }
}
`;
function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      onClick: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
      variant: "default",
      size: "xl",
      "aria-label": "Toggle color scheme"
    },
    /* @__PURE__ */ React.createElement(IconSun, { className: cx(classes.icon, classes.light), stroke: 1.5 }),
    /* @__PURE__ */ React.createElement(IconMoon, { className: cx(classes.icon, classes.dark), stroke: 1.5 })
  );
}
const colorSchemeControl = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "Demo.module.css", language: "css", code: cssCode }
  ]
};

export { colorSchemeControl };
//# sourceMappingURL=Theming.demo.colorSchemeControl.js.map
