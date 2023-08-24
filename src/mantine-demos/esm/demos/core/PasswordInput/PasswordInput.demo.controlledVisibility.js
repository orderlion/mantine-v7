import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Stack, PasswordInput } from '@mantine/core';

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
  const [visible, { toggle }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(Stack, null, /* @__PURE__ */ React.createElement(
    PasswordInput,
    {
      label: "Password",
      defaultValue: "secret",
      visible,
      onVisibilityChange: toggle
    }
  ), /* @__PURE__ */ React.createElement(
    PasswordInput,
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

export { controlledVisibility };
//# sourceMappingURL=PasswordInput.demo.controlledVisibility.js.map
