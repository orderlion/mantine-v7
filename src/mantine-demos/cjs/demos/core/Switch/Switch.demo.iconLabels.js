'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme = core.useMantineTheme();
  const sunIcon = /* @__PURE__ */ React__default.createElement(
    iconsReact.IconSun,
    {
      style: { width: core.rem(16), height: core.rem(16) },
      stroke: 2.5,
      color: theme.colors.yellow[4]
    }
  );
  const moonIcon = /* @__PURE__ */ React__default.createElement(
    iconsReact.IconMoonStars,
    {
      style: { width: core.rem(16), height: core.rem(16) },
      stroke: 2.5,
      color: theme.colors.blue[6]
    }
  );
  return /* @__PURE__ */ React__default.createElement(core.Switch, { size: "md", color: "dark.4", onLabel: sunIcon, offLabel: moonIcon });
}
const iconLabels = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.iconLabels = iconLabels;
//# sourceMappingURL=Switch.demo.iconLabels.js.map
