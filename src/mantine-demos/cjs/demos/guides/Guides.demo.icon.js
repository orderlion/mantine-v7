'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    iconsReact.IconBrandMantine,
    {
      style: { width: core.rem(80), height: core.rem(80) },
      stroke: 1.5,
      color: "var(--mantine-color-blue-filled)"
    }
  );
}
const icon = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.icon = icon;
//# sourceMappingURL=Guides.demo.icon.js.map
