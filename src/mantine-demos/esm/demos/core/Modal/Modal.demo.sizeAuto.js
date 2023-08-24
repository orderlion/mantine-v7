import React from 'react';
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Badge, Modal, Text, Group, Button } from '@mantine/core';

const code = `
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });
  const badges = Array(count).fill(0).map((_, index) => /* @__PURE__ */ React.createElement(Badge, { key: index }, "Badge ", index));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Modal, { opened, onClose: close, size: "auto", title: "Modal size auto" }, /* @__PURE__ */ React.createElement(Text, null, "Modal with size auto will fits its content"), /* @__PURE__ */ React.createElement(Group, { wrap: "nowrap", mt: "md" }, badges), /* @__PURE__ */ React.createElement(Group, { mt: "xl" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: increment }, "Add badge"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: decrement }, "Remove badge"))), /* @__PURE__ */ React.createElement(Button, { onClick: open }, "Open modal"));
}
const sizeAuto = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { sizeAuto };
//# sourceMappingURL=Modal.demo.sizeAuto.js.map
