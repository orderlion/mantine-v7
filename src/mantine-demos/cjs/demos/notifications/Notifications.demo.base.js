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
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      variant: "outline",
      onClick: () => notifications.notifications.show({
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

exports.base = base;
//# sourceMappingURL=Notifications.demo.base.js.map
