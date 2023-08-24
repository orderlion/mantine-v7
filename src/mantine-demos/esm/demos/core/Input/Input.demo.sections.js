import React, { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const code = `
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = useState("Clear me");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "Your email", leftSection: /* @__PURE__ */ React.createElement(IconAt, { size: 16 }) }), /* @__PURE__ */ React.createElement(
    Input,
    {
      placeholder: "Clearable input",
      value,
      onChange: (event) => setValue(event.currentTarget.value),
      rightSectionPointerEvents: "all",
      mt: "md",
      rightSection: /* @__PURE__ */ React.createElement(
        CloseButton,
        {
          "aria-label": "Clear input",
          onClick: () => setValue(""),
          style: { display: value ? void 0 : "none" }
        }
      )
    }
  ));
}
const sections = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { sections };
//# sourceMappingURL=Input.demo.sections.js.map
