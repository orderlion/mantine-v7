import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, ScrollArea, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", { key: index }, "Drawer with scroll"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Drawer,
    {
      opened,
      onClose: close,
      title: "Header is sticky",
      scrollAreaComponent: ScrollArea.Autosize
    },
    content
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open drawer"));
}
const scrollarea = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { scrollarea };
//# sourceMappingURL=Drawer.demo.scrollarea.js.map
