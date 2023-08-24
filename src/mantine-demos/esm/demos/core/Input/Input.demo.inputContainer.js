import React, { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

const code = `
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`;
function Demo() {
  const [focused, setFocused] = useState(false);
  return /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "TextInput with tooltip",
      description: "Tooltip will be relative to the input",
      placeholder: "Focus me to see tooltip",
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      inputContainer: (children) => /* @__PURE__ */ React.createElement(Tooltip, { label: "Additional information", position: "top-start", opened: focused }, children)
    }
  );
}
const inputContainer = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { inputContainer };
//# sourceMappingURL=Input.demo.inputContainer.js.map
