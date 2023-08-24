'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Drawer,
    {
      opened,
      onClose: close,
      title: "Authentication",
      overlayProps: { backgroundOpacity: 0.5, blur: 4 }
    },
    /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, { noShadow: true, noPadding: true })
  ), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open drawer"));
}
const overlay = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.overlay = overlay;
//# sourceMappingURL=Drawer.demo.overlay.js.map
