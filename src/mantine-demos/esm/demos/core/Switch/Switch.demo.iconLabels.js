import React from 'react';
import { useMantineTheme, rem, Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`;
function Demo() {
  const theme = useMantineTheme();
  const sunIcon = /* @__PURE__ */ React.createElement(
    IconSun,
    {
      style: { width: rem(16), height: rem(16) },
      stroke: 2.5,
      color: theme.colors.yellow[4]
    }
  );
  const moonIcon = /* @__PURE__ */ React.createElement(
    IconMoonStars,
    {
      style: { width: rem(16), height: rem(16) },
      stroke: 2.5,
      color: theme.colors.blue[6]
    }
  );
  return /* @__PURE__ */ React.createElement(Switch, { size: "md", color: "dark.4", onLabel: sunIcon, offLabel: moonIcon });
}
const iconLabels = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { iconLabels };
//# sourceMappingURL=Switch.demo.iconLabels.js.map
