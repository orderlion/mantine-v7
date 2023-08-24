'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');
var Notifications_demo_customize_module = require('./Notifications.demo.customize.module.css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      onClick: () => notifications.notifications.show({
        title: "Notification with custom styles",
        message: "It is default blue",
        classNames: Notifications_demo_customize_module['default']
      })
    },
    "Default notification"
  ), /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      color: "red",
      onClick: () => notifications.notifications.show({
        color: "red",
        title: "Notification with custom styles",
        message: "It is red",
        classNames: Notifications_demo_customize_module['default']
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

exports.customize = customize;
//# sourceMappingURL=Notifications.demo.customize.js.map
