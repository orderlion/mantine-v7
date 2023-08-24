'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var ActionIcon_demo_disabledStyles_module = require('./ActionIcon.demo.disabledStyles.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
`;
const cssCode = `
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, { size: "xl", className: ActionIcon_demo_disabledStyles_module['default'].button, disabled: true, "aria-label": "Disabled with styles" }, /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, null));
}
const disabledStyles = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.disabledStyles = disabledStyles;
//# sourceMappingURL=ActionIcon.demo.disabledStyles.js.map
