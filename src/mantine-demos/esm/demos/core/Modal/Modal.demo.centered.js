import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, { opened, onClose: close, title: "Authentication", centered: true }, /* @__PURE__ */ React.createElement(AuthenticationForm, { noPadding: true, noShadow: true })), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open centered Modal"));
}
const centered = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { centered };
//# sourceMappingURL=Modal.demo.centered.js.map
