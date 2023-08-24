import React from 'react';
import { TextInput, Text } from '@mantine/core';
import { useInputState, usePrevious } from '@mantine/hooks';

const code = `
import { TextInput, Text } from '@mantine/core';
import { usePrevious, useInputState } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;
function Demo() {
  const [value, setValue] = useInputState("");
  const previousValue = usePrevious(value);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "Enter some text here",
      placeholder: "Enter some text here",
      id: "previous-demo-input",
      value,
      onChange: setValue
    }
  ), /* @__PURE__ */ React.createElement(Text, { mt: "md" }, "Current value: ", value), /* @__PURE__ */ React.createElement(Text, null, "Previous value: ", previousValue));
}
const usePreviousUsage = {
  type: "code",
  component: Demo,
  code
};

export { usePreviousUsage };
//# sourceMappingURL=use-previous.demo.usage.js.map
