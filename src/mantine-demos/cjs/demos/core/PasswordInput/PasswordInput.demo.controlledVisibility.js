'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`;
function Demo() {
  const [visible, { toggle }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(core.Stack, null, /* @__PURE__ */ React__default.createElement(
    core.PasswordInput,
    {
      label: "Password",
      defaultValue: "secret",
      visible,
      onVisibilityChange: toggle
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.PasswordInput,
    {
      label: "Confirm password",
      defaultValue: "secret",
      visible,
      onVisibilityChange: toggle
    }
  ));
}
const controlledVisibility = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.controlledVisibility = controlledVisibility;
//# sourceMappingURL=PasswordInput.demo.controlledVisibility.js.map
