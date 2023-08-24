'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, { opened, onClose: close, title: "Authentication", centered: true }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, { noPadding: true, noShadow: true })), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open centered Modal"));
}
const centered = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.centered = centered;
//# sourceMappingURL=Modal.demo.centered.js.map
