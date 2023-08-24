import React from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { Box, TextInput, Text } from '@mantine/core';

const code = `
import { useDebouncedState } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = useDebouncedState("", 200);
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Enter value to see debounce effect",
      placeholder: "Enter value to see debounce effect",
      defaultValue: value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  ), /* @__PURE__ */ React.createElement(Text, { mt: "sm" }, /* @__PURE__ */ React.createElement(Text, { component: "span", c: "dimmed", size: "sm" }, "Debounced value:"), " ", value.trim() || "[empty string]"));
}
const useDebouncedStateUsage = {
  type: "code",
  component: Demo,
  code
};

export { useDebouncedStateUsage };
//# sourceMappingURL=use-debounced-state.demo.usage.js.map
