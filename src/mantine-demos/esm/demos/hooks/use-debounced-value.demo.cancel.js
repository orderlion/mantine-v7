import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { Box, Group, TextInput, Button, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} size="lg">
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = useState("");
  const [debounced, cancel] = useDebouncedValue(value, 1e3);
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(Group, { align: "flex-end" }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Enter value to see debounce effect",
      placeholder: "Enter value to see debounce effect",
      value,
      style: { flex: 1 },
      onChange: (event) => setValue(event.currentTarget.value)
    }
  ), /* @__PURE__ */ React.createElement(Button, { onClick: cancel }, "Cancel")), /* @__PURE__ */ React.createElement(Text, { mt: "sm" }, /* @__PURE__ */ React.createElement(Text, { component: "span", c: "dimmed", size: "sm" }, "Value:"), " ", value.trim() || "[empty string]"), /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Text, { component: "span", c: "dimmed", size: "sm" }, "Debounced value:"), " ", debounced.trim() || "[empty string]"));
}
const useDebouncedValueCancel = {
  type: "code",
  component: Demo,
  code
};

export { useDebouncedValueCancel };
//# sourceMappingURL=use-debounced-value.demo.cancel.js.map
