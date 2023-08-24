'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  const content = Array(100).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement("p", { key: index }, "Modal with scroll"));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Modal,
    {
      opened,
      onClose: close,
      title: "Header is sticky",
      scrollAreaComponent: core.ScrollArea.Autosize
    },
    content
  ), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open modal"));
}
const scrollarea = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.scrollarea = scrollarea;
//# sourceMappingURL=Modal.demo.scrollarea.js.map
