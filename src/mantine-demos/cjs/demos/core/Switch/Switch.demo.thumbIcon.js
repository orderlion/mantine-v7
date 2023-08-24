'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  const [checked, setChecked] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(
    core.Switch,
    {
      checked,
      onChange: (event) => setChecked(event.currentTarget.checked),
      color: "teal",
      size: "md",
      label: "Switch with thumb icon",
      thumbIcon: checked ? /* @__PURE__ */ React__default.createElement(
        iconsReact.IconCheck,
        {
          style: { width: core.rem(12), height: core.rem(12) },
          color: theme.colors.teal[6],
          stroke: 3
        }
      ) : /* @__PURE__ */ React__default.createElement(
        iconsReact.IconX,
        {
          style: { width: core.rem(12), height: core.rem(12) },
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

exports.thumbIcon = thumbIcon;
//# sourceMappingURL=Switch.demo.thumbIcon.js.map
