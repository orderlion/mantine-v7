import React from 'react';
import cx from 'clsx';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl.js';
import classes from './ColorSchemeControl.module.css.js';

function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ React.createElement(
    HeaderControl,
    {
      onClick: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
      tooltip: `${computedColorScheme === "dark" ? "Light" : "Dark"} mode`
    },
    /* @__PURE__ */ React.createElement(IconSun, { className: cx(classes.icon, classes.light), stroke: 1.5 }),
    /* @__PURE__ */ React.createElement(IconMoon, { className: cx(classes.icon, classes.dark), stroke: 1.5 })
  );
}

export { ColorSchemeControl };
//# sourceMappingURL=ColorSchemeControl.js.map
