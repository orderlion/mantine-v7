import React from 'react';
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      opened,
      onClose: close,
      title: "Authentication",
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3
      }
    },
    /* @__PURE__ */ React.createElement(AuthenticationForm, { noShadow: true, noPadding: true })
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const overlay = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { overlay };
//# sourceMappingURL=Modal.demo.overlay.js.map
