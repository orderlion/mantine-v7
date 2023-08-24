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
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: `Notification ${index + 1}`,
              message: "Most notifications are added to queue"
            });
          }, 200 * index);
        });
      }
    },
    "Show 10 notifications"
  );
}
const limit = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { limit };
//# sourceMappingURL=Notifications.demo.limit.js.map
