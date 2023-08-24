'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Chip, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Chip,
    {
      icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconX, { style: { width: core.rem(16), height: core.rem(16) } }),
      color: "red",
      variant: "filled",
      defaultChecked: true
    },
    "Forbidden"
  );
}
const icon = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.icon = icon;
//# sourceMappingURL=Chip.demo.icon.js.map
