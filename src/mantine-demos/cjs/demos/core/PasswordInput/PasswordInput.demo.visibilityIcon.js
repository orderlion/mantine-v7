'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        ) : (
          <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        )
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.PasswordInput,
    {
      maw: 320,
      mx: "auto",
      label: "Change visibility toggle icon",
      placeholder: "Change visibility toggle icon",
      defaultValue: "secret",
      visibilityToggleIcon: ({ reveal }) => reveal ? /* @__PURE__ */ React__default.createElement(iconsReact.IconEyeOff, { style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" } }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconEyeCheck, { style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" } })
    }
  );
}
const visibilityIcon = {
  type: "code",
  component: Demo,
  code
};

exports.visibilityIcon = visibilityIcon;
//# sourceMappingURL=PasswordInput.demo.visibilityIcon.js.map
