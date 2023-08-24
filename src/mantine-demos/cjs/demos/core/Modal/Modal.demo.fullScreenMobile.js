'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${core.em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  const isMobile = hooks.useMediaQuery(`(max-width: ${core.em(800)})`);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Modal,
    {
      opened,
      onClose: close,
      title: "This is a fullscreen modal",
      fullScreen: isMobile,
      transitionProps: { transition: "fade", duration: 200 }
    },
    "The Modal will be full screen only on mobile"
  ), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open Modal"));
}
const fullScreenMobile = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.fullScreenMobile = fullScreenMobile;
//# sourceMappingURL=Modal.demo.fullScreenMobile.js.map
