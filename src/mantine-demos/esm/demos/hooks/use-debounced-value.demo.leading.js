import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { Box, TextInput, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200, { leading: true });
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Enter value to see debounce effect",
      placeholder: "Enter value to see debounce effect",
      value,
      onChange: (event) => setValue(event.currentTarget.value)
    }
  ), /* @__PURE__ */ React.createElement(Text, { mt: "sm" }, /* @__PURE__ */ React.createElement(Text, { component: "span", c: "dimmed", size: "sm" }, "Value:"), " ", value.trim() || "[empty string]"), /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Text, { component: "span", c: "dimmed", size: "sm" }, "Debounced value:"), " ", debounced.trim() || "[empty string]"));
}
const useDebouncedValueLeading = {
  type: "code",
  component: Demo,
  code
};

export { useDebouncedValueLeading };
//# sourceMappingURL=use-debounced-value.demo.leading.js.map
