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
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, { opened, onClose: close, title: "Authentication", yOffset: "1vh", xOffset: 0 }, /* @__PURE__ */ React.createElement(AuthenticationForm, { noPadding: true, noShadow: true })), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const offset = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { offset };
//# sourceMappingURL=Modal.demo.offset.js.map
