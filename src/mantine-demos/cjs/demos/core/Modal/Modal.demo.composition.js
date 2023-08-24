'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal.Root, { opened, onClose: close }, /* @__PURE__ */ React__default.createElement(core.Modal.Overlay, null), /* @__PURE__ */ React__default.createElement(core.Modal.Content, null, /* @__PURE__ */ React__default.createElement(core.Modal.Header, null, /* @__PURE__ */ React__default.createElement(core.Modal.Title, null, "Modal title"), /* @__PURE__ */ React__default.createElement(core.Modal.CloseButton, null)), /* @__PURE__ */ React__default.createElement(core.Modal.Body, null, "Modal content"))), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open modal"));
}
const composition = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.composition = composition;
//# sourceMappingURL=Modal.demo.composition.js.map
