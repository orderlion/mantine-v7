'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "outline",
      onClick: () => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.notifications.show({
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

exports.limit = limit;
//# sourceMappingURL=Notifications.demo.limit.js.map
