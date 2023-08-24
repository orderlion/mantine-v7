'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "outline",
      onClick: () => {
        Array(10).fill(0).forEach((_, index) => {
          notifications.notifications.show({
            title: `Notification ${index + 1}`,
            message: "Most notifications are added to queue",
            autoClose: false
          });
        });
      }
    },
    "Show 10 notifications"
  ), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", color: "gray", onClick: () => notifications.notifications.cleanQueue() }, "Clean queue"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", color: "red", onClick: () => notifications.notifications.clean() }, "Clean all"));
}
const clean = {
  type: "code",
  code,
  component: Demo
};

exports.clean = clean;
//# sourceMappingURL=Notifications.demo.clean.js.map
