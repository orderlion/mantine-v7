import React from 'react';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openConfirmModal({
          title: 'Please confirm your action',
          closeOnConfirm: false,
          labels: { confirm: 'Next modal', cancel: 'Close modal' },
          children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please
              click one of these buttons to proceed.
            </Text>
          ),
          onConfirm: () =>
            modals.openConfirmModal({
              title: 'This is modal at second layer',
              labels: { confirm: 'Close modal', cancel: 'Back' },
              closeOnConfirm: false,
              children: (
                <Text size="sm">
                  When this modal is closed modals state will revert to first modal
                </Text>
              ),
              onConfirm: modals.closeAll,
            }),
        })
      }
    >
      Open multiple steps modal
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => modals.openConfirmModal({
        title: "Please confirm your action",
        closeOnConfirm: false,
        labels: { confirm: "Next modal", cancel: "Close modal" },
        children: /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
        onConfirm: () => modals.openConfirmModal({
          title: "This is modal at second layer",
          labels: { confirm: "Close modal", cancel: "Back" },
          closeOnConfirm: false,
          children: /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "When this modal is closed modals state will revert to first modal"),
          onConfirm: modals.closeAll
        })
      })
    },
    "Open multiple steps modal"
  );
}
const multipleSteps = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { multipleSteps };
//# sourceMappingURL=Modals.demo.multipleSteps.js.map
