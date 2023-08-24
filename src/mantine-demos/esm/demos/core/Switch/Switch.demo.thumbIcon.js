import React, { useState } from 'react';
import { useMantineTheme, Switch, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

const code = `
import { useState } from 'react';
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ React.createElement(
    Switch,
    {
      checked,
      onChange: (event) => setChecked(event.currentTarget.checked),
      color: "teal",
      size: "md",
      label: "Switch with thumb icon",
      thumbIcon: checked ? /* @__PURE__ */ React.createElement(
        IconCheck,
        {
          style: { width: rem(12), height: rem(12) },
          color: theme.colors.teal[6],
          stroke: 3
        }
      ) : /* @__PURE__ */ React.createElement(
        IconX,
        {
          style: { width: rem(12), height: rem(12) },
          color: theme.colors.red[6],
          stroke: 3
        }
      )
    }
  );
}
const thumbIcon = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { thumbIcon };
//# sourceMappingURL=Switch.demo.thumbIcon.js.map
