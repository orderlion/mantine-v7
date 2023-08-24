import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text, Button } from '@mantine/core';
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
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
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
      title: "This is a fullscreen modal",
      fullScreen: true,
      radius: 0,
      transitionProps: { transition: "fade", duration: 200 }
    },
    /* @__PURE__ */ React.createElement(Text, { mb: "xl" }, "It takes the entire screen and does not not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."),
    /* @__PURE__ */ React.createElement(AuthenticationForm, { noPadding: true, noShadow: true })
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open Modal"));
}
const fullScreen = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { fullScreen };
//# sourceMappingURL=Modal.demo.fullScreen.js.map
