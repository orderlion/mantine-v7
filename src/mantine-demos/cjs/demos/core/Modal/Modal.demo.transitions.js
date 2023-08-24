'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = React.useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Modal,
    {
      opened: slowTransitionOpened,
      onClose: () => setSlowTransitionOpened(false),
      title: "Please consider this",
      transitionProps: { transition: "rotate-left" }
    },
    "rotate-left transition"
  ), /* @__PURE__ */ React__default.createElement(
    core.Modal,
    {
      opened: noTransitionOpened,
      onClose: () => setNoTransitionOpened(false),
      title: "Please consider this",
      transitionProps: { transition: "fade", duration: 600, timingFunction: "linear" }
    },
    "fade transition 600ms linear transition"
  ), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setSlowTransitionOpened(true), variant: "default" }, "Rotate left transition"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setNoTransitionOpened(true), variant: "default" }, "Fade transition")));
}
const transitions = {
  type: "code",
  code,
  component: Demo
};

exports.transitions = transitions;
//# sourceMappingURL=Modal.demo.transitions.js.map
