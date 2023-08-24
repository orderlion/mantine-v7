import React from 'react';
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const code = `
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => notifications.show({ message: "I will close in 4 seconds" })
    },
    "Notifications Provider timeout"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => notifications.show({
        message: "I will close in 500ms",
        autoClose: 500
      })
    },
    "Closes in 500ms"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => notifications.show({
        color: "blue",
        title: "I will never close",
        message: "unless you click X",
        autoClose: false
      })
    },
    "Never closes automatically"
  ));
}
const autoclose = {
  type: "code",
  code,
  component: Demo
};

export { autoclose };
//# sourceMappingURL=Notifications.demo.autoclose.js.map
