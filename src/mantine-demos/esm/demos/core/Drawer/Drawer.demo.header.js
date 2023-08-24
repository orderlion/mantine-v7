import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Drawer, { opened, onClose: close, withCloseButton: false }, "Drawer without header, press escape or click on overlay to close"), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open drawer"));
}
const header = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { header };
//# sourceMappingURL=Drawer.demo.header.js.map
