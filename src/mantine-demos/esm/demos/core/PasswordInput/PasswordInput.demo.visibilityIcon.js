import React from 'react';
import { IconEyeOff, IconEyeCheck } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(
    PasswordInput,
    {
      maw: 320,
      mx: "auto",
      label: "Change visibility toggle icon",
      placeholder: "Change visibility toggle icon",
      defaultValue: "secret",
      visibilityToggleIcon: ({ reveal }) => reveal ? /* @__PURE__ */ React.createElement(IconEyeOff, { style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" } }) : /* @__PURE__ */ React.createElement(IconEyeCheck, { style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" } })
    }
  );
}
const visibilityIcon = {
  type: "code",
  component: Demo,
  code
};

export { visibilityIcon };
//# sourceMappingURL=PasswordInput.demo.visibilityIcon.js.map
