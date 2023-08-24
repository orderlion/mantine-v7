'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');
var notifications = require('@mantine/notifications');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`;
function Demo() {
  const openModal = () => modals.modals.openConfirmModal({
    modalId: "test-id",
    title: "Please confirm your action",
    children: /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    onCancel: () => notifications.notifications.show({
      title: "Canceled",
      message: "Confirm modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications.notifications.show({
      title: "Confirmed",
      message: "Confirm modal was confirmed",
      color: "teal"
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Button, { onClick: openModal }, "Open confirm modal");
}
const confirm = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.confirm = confirm;
//# sourceMappingURL=Modals.demo.confirm.js.map
