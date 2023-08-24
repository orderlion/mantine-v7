import React from 'react';
import { Box, TextInput, Text } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

const code = `
import { TextInput, Text, Box } from '@mantine/core';
import { useValidatedState } from '@mantine/hooks';

function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    '',
    (val) => /^\\S+@\\S+$/.test(val),
    true
  );

  return (
    <Box maw={320} mx="auto" style={{ overflowWrap: 'break-word' }}>
      <TextInput
        value={value}
        onChange={(event) => setEmail(event.currentTarget.value)}
        withAsterisk
        error={!valid}
        placeholder="email@example.com"
        label="Your email"
      />

      <Text size="sm" mt="md">
        <Text inherit c="dimmed" component="span">
          Current value:
        </Text>{' '}
        {value || '[empty string]'}
      </Text>

      <Text size="sm">
        <Text inherit c="dimmed" component="span">
          Last valid value:
        </Text>{' '}
        {lastValidValue || '[empty string]'}
      </Text>
    </Box>
  );
}
`;
function Demo() {
  const [{ value, lastValidValue, valid }, setEmail] = useValidatedState(
    "",
    (val) => /^\S+@\S+$/.test(val),
    true
  );
  return /* @__PURE__ */ React.createElement(Box, { maw: 320, mx: "auto", style: { overflowWrap: "break-word" } }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      value,
      onChange: (event) => setEmail(event.currentTarget.value),
      withAsterisk: true,
      error: !valid,
      placeholder: "email@example.com",
      label: "Your email"
    }
  ), /* @__PURE__ */ React.createElement(Text, { size: "sm", mt: "md" }, /* @__PURE__ */ React.createElement(Text, { inherit: true, c: "dimmed", component: "span" }, "Current value:"), " ", value || "[empty string]"), /* @__PURE__ */ React.createElement(Text, { size: "sm" }, /* @__PURE__ */ React.createElement(Text, { inherit: true, c: "dimmed", component: "span" }, "Last valid value:"), " ", lastValidValue || "[empty string]"));
}
const useValidatedStateDemo = {
  type: "code",
  code,
  component: Demo
};

export { useValidatedStateDemo };
//# sourceMappingURL=use-validated-state.demo.usage.js.map
