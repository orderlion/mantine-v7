import React from 'react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const code = `
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! \u{1F925}',
        })
      }
    >
      Show notification
    </Button>
  );
}`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => notifications.show({
        title: "Default notification",
        message: "Hey there, your code is awesome! \u{1F925}"
      })
    },
    "Show notification"
  );
}
const base = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { base };
//# sourceMappingURL=Notifications.demo.base.js.map
