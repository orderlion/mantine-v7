import React, { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { ColorInput, ActionIcon, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, ColorInput, rem } from '@mantine/core';

const randomColor = () => \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <IconRefresh style={{ width: rem(16), height: rem(16) }} />
        </ActionIcon>
      }
    />
  );
}
`;
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function Demo() {
  const [value, onChange] = useState(randomColor());
  return /* @__PURE__ */ React.createElement(
    ColorInput,
    {
      maw: 320,
      mx: "auto",
      placeholder: "Pick color",
      label: "Your favorite color",
      value,
      onChange,
      rightSection: /* @__PURE__ */ React.createElement(ActionIcon, { onClick: () => onChange(randomColor()) }, /* @__PURE__ */ React.createElement(IconRefresh, { style: { width: rem(16), height: rem(16) } }))
    }
  );
}
const rightSection = {
  type: "code",
  component: Demo,
  code
};

export { rightSection };
//# sourceMappingURL=ColorInput.demo.rightSection.js.map
