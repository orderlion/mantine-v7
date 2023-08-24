'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { open, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Drawer.Root, { opened, onClose: close }, /* @__PURE__ */ React__default.createElement(core.Drawer.Overlay, null), /* @__PURE__ */ React__default.createElement(core.Drawer.Content, null, /* @__PURE__ */ React__default.createElement(core.Drawer.Header, null, /* @__PURE__ */ React__default.createElement(core.Drawer.Title, null, "Drawer title"), /* @__PURE__ */ React__default.createElement(core.Drawer.CloseButton, null)), /* @__PURE__ */ React__default.createElement(core.Drawer.Body, null, "Drawer content"))), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open drawer"));
}
const composition = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.composition = composition;
//# sourceMappingURL=Drawer.demo.composition.js.map
