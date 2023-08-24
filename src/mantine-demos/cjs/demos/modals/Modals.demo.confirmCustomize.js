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
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
`;
function Demo() {
  const openDeleteModal = () => modals.modals.openConfirmModal({
    title: "Delete your profile",
    centered: true,
    children: /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."),
    labels: { confirm: "Delete account", cancel: "No don't delete it" },
    confirmProps: { color: "red" },
    onCancel: () => notifications.notifications.show({
      title: "Canceled",
      message: "Delete modal was canceled",
      color: "gray"
    }),
    onConfirm: () => notifications.notifications.show({
      title: "Deleted",
      message: "Delete modal was confirmed",
      color: "red"
    })
  });
  return /* @__PURE__ */ React__default.createElement(core.Button, { onClick: openDeleteModal, color: "red" }, "Delete account");
}
const confirmCustomize = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.confirmCustomize = confirmCustomize;
//# sourceMappingURL=Modals.demo.confirmCustomize.js.map
