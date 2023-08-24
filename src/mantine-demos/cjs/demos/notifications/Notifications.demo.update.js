'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "outline",
      onClick: () => {
        const id = notifications.notifications.show({
          loading: true,
          title: "Loading your data",
          message: "Data will be loaded in 3 seconds, you cannot close this yet",
          autoClose: false,
          withCloseButton: false
        });
        setTimeout(() => {
          notifications.notifications.update({
            id,
            color: "teal",
            title: "Data was loaded",
            message: "Notification will close in 2 seconds, you can close this notification now",
            icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, { style: { width: core.rem(18), height: core.rem(18) } }),
            loading: false,
            autoClose: 2e3
          });
        }, 3e3);
      }
    },
    "Show update notification"
  );
}
const update = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.update = update;
//# sourceMappingURL=Notifications.demo.update.js.map
