import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, ScrollArea, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", { key: index }, "Modal with scroll"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Modal,
    {
      opened,
      onClose: close,
      title: "Header is sticky",
      scrollAreaComponent: ScrollArea.Autosize
    },
    content
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const scrollarea = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { scrollarea };
//# sourceMappingURL=Modal.demo.scrollarea.js.map
