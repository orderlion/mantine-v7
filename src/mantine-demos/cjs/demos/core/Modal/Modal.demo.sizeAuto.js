'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button variant="outline" onClick={increment}>
            Add badge
          </Button>
          <Button variant="outline" onClick={decrement}>
            Remove badge
          </Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;
function Demo() {
  const [opened, { close, open }] = hooks.useDisclosure(false);
  const [count, { increment, decrement }] = hooks.useCounter(3, { min: 0 });
  const badges = Array(count).fill(0).map((_, index) => /* @__PURE__ */ React__default.createElement(core.Badge, { key: index }, "Badge ", index));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, { opened, onClose: close, size: "auto", title: "Modal size auto" }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Modal with size auto will fits its content"), /* @__PURE__ */ React__default.createElement(core.Group, { wrap: "nowrap", mt: "md" }, badges), /* @__PURE__ */ React__default.createElement(core.Group, { mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", onClick: increment }, "Add badge"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "outline", onClick: decrement }, "Remove badge"))), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: open }, "Open modal"));
}
const sizeAuto = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.sizeAuto = sizeAuto;
//# sourceMappingURL=Modal.demo.sizeAuto.js.map
