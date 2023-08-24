import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { em, Modal, Button } from '@mantine/core';

const code = `
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      opened,
      onClose: close,
      title: "This is a fullscreen modal",
      fullScreen: isMobile,
      transitionProps: { transition: "fade", duration: 200 }
    },
    "The Modal will be full screen only on mobile"
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open Modal"));
}
const fullScreenMobile = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { fullScreenMobile };
//# sourceMappingURL=Modal.demo.fullScreenMobile.js.map
