import React from 'react';
import { Box, LoadingOverlay, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm.js';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;
function Demo() {
  const [visible, { toggle }] = useDisclosure(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, { pos: "relative" }, /* @__PURE__ */ React.createElement(
    LoadingOverlay,
    {
      visible,
      zIndex: 1e3,
      overlayProps: { radius: "sm", blur: 2 },
      loaderProps: { color: "pink", type: "bars" }
    }
  ), /* @__PURE__ */ React.createElement(AuthenticationForm, { noSubmit: true })), /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React.createElement(Button, { onClick: toggle }, "Toggle overlay")));
}
const loaderProps = {
  centered: true,
  maxWidth: 400,
  dimmed: true,
  type: "code",
  code,
  component: Demo
};

export { Demo, loaderProps };
//# sourceMappingURL=LoadingOverlay.demo.loaderProps.js.map
