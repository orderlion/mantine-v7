import React from 'react';
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Notifications.demo.customize.module.css.js';

const code = `
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        notifications.show({
          title: 'Notification with custom styles',
          message: 'It is default blue',
          classNames: classes,
        })
      }
    >
      Show customized notification
    </Button>
  );
}`;
const cssCode = `
.root {
  background-color: var(--notification-color);

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => notifications.show({
        title: "Notification with custom styles",
        message: "It is default blue",
        classNames: classes
      })
    },
    "Default notification"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      color: "red",
      onClick: () => notifications.show({
        color: "red",
        title: "Notification with custom styles",
        message: "It is red",
        classNames: classes
      })
    },
    "Error notification"
  ));
}
const customize = {
  type: "code",
  centered: true,
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { customize };
//# sourceMappingURL=Notifications.demo.customize.js.map
