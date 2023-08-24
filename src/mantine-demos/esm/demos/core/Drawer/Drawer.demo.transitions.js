import React from 'react';
import { Drawer, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

`;
function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Drawer,
    {
      opened,
      onClose: close,
      title: "Authentication",
      transitionProps: { transition: "rotate-left", duration: 150, timingFunction: "linear" }
    },
    /* @__PURE__ */ React.createElement(AuthenticationForm, { noShadow: true, noPadding: true })
  ), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open Drawer"));
}
const transitions = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { transitions };
//# sourceMappingURL=Drawer.demo.transitions.js.map
