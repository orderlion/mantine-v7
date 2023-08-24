'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xl", disabled: true, "aria-label": "Disabled and not interactive" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null)), /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xl", "data-disabled": true, "aria-label": "Has disabled styles but still interactive" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null)));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=ActionIcon.demo.disabled.js.map
