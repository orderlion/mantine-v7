import React from 'react';
import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

const code = `
import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TextInput, { placeholder: "Error as boolean", label: "Error as boolean", error: true }), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      mt: "md",
      placeholder: "Error as react node",
      label: "Error as react node",
      error: "Something went wrong"
    }
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      mt: "md",
      placeholder: "Without error styles on input",
      label: "Without error styles on input",
      error: "Something went wrong",
      withErrorStyles: false,
      rightSectionPointerEvents: "none",
      rightSection: /* @__PURE__ */ React.createElement(
        IconExclamationCircle,
        {
          style: { width: rem(20), height: rem(20) },
          color: "var(--mantine-color-error)"
        }
      )
    }
  ));
}
const error = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { error };
//# sourceMappingURL=Input.demo.error.js.map
