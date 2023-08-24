import React from 'react';
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

const code = `
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => modals.openContextModal({
        modal: "demonstration",
        title: "Test modal from context",
        innerProps: {
          modalBody: "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"
        }
      })
    },
    "Open demonstration context modal"
  );
}
const context = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { context };
//# sourceMappingURL=Modals.demo.context.js.map
