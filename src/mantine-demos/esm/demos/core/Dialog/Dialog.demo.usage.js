import React from 'react';
import { Group, Button, Dialog, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;
function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: toggle }, "Toggle dialog")), /* @__PURE__ */ React.createElement(Dialog, { opened, withCloseButton: true, onClose: close, size: "lg", radius: "md" }, /* @__PURE__ */ React.createElement(Text, { size: "sm", mb: "xs", fw: 500 }, "Subscribe to email newsletter"), /* @__PURE__ */ React.createElement(Group, { align: "flex-end" }, /* @__PURE__ */ React.createElement(TextInput, { placeholder: "hello@gluesticker.com", style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { onClick: close }, "Subscribe"))));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Dialog.demo.usage.js.map
