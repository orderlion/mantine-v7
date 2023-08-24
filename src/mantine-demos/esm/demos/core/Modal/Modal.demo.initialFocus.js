import React from 'react';
import { Modal, TextInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, { opened, onClose: close, title: "Focus demo" }, /* @__PURE__ */ React.createElement(TextInput, { label: "First input", placeholder: "First input" }), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      "data-autofocus": true,
      label: "Input with initial focus",
      placeholder: "It has data-autofocus attribute",
      mt: "md"
    }
  )), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const initialFocus = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { initialFocus };
//# sourceMappingURL=Modal.demo.initialFocus.js.map
