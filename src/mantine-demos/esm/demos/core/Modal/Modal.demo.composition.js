import React from 'react';
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal.Root, { opened, onClose: close }, /* @__PURE__ */ React.createElement(Modal.Overlay, null), /* @__PURE__ */ React.createElement(Modal.Content, null, /* @__PURE__ */ React.createElement(Modal.Header, null, /* @__PURE__ */ React.createElement(Modal.Title, null, "Modal title"), /* @__PURE__ */ React.createElement(Modal.CloseButton, null)), /* @__PURE__ */ React.createElement(Modal.Body, null, "Modal content"))), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const composition = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { composition };
//# sourceMappingURL=Modal.demo.composition.js.map
