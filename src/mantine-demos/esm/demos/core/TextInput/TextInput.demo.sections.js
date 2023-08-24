import React from 'react';
import { rem, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const code = `
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`;
function Demo() {
  const icon = /* @__PURE__ */ React.createElement(IconAt, { style: { width: rem(16), height: rem(16) } });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      leftSectionPointerEvents: "none",
      leftSection: icon,
      label: "Your email",
      placeholder: "Your email"
    }
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      mt: "md",
      rightSectionPointerEvents: "none",
      rightSection: icon,
      label: "Your email",
      placeholder: "Your email"
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
//# sourceMappingURL=TextInput.demo.sections.js.map
