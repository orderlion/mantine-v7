'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Tooltip for disabled button" }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xl", "data-disabled": true, onClick: (event) => event.preventDefault() }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null)));
}
const disabledTooltip = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.disabledTooltip = disabledTooltip;
//# sourceMappingURL=ActionIcon.demo.disabledTooltip.js.map
