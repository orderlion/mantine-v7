import React from 'react';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`;
function Demo() {
  const openModal = () => modals.openConfirmModal({
    modalId: "test-id",
    title: "Please confirm your action",
    children: /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    onCancel: () => notifications.show({
      title: "Canceled",
      message: "Confirm modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications.show({
      title: "Confirmed",
      message: "Confirm modal was confirmed",
      color: "teal"
    })
  });
  return /* @__PURE__ */ React.createElement(Button, { onClick: openModal }, "Open confirm modal");
}
const confirm = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { confirm };
//# sourceMappingURL=Modals.demo.confirm.js.map
