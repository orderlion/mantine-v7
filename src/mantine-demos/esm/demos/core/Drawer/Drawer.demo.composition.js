import React from 'react';
import { Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer.Root, { opened, onClose: close }, /* @__PURE__ */ React.createElement(Drawer.Overlay, null), /* @__PURE__ */ React.createElement(Drawer.Content, null, /* @__PURE__ */ React.createElement(Drawer.Header, null, /* @__PURE__ */ React.createElement(Drawer.Title, null, "Drawer title"), /* @__PURE__ */ React.createElement(Drawer.CloseButton, null)), /* @__PURE__ */ React.createElement(Drawer.Body, null, "Drawer content"))), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open drawer"));
}
const composition = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { composition };
//# sourceMappingURL=Drawer.demo.composition.js.map
