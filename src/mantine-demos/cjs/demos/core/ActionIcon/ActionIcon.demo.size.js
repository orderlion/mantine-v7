'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: 42, variant: "default", "aria-label": "ActionIcon with size as a number" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, { style: { width: core.rem(24), height: core.rem(24) } }));
}
const size = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.size = size;
//# sourceMappingURL=ActionIcon.demo.size.js.map
