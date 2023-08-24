'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`;
function Demo() {
  const [opened, { toggle, close }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle }, "Toggle dialog")), /* @__PURE__ */ React__default.createElement(core.Dialog, { opened, withCloseButton: true, onClose: close, size: "lg", radius: "md" }, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", mb: "xs", fw: 500 }, "Subscribe to email newsletter"), /* @__PURE__ */ React__default.createElement(core.Group, { align: "flex-end" }, /* @__PURE__ */ React__default.createElement(core.TextInput, { placeholder: "hello@gluesticker.com", style: { flex: 1 } }), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: close }, "Subscribe"))));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Dialog.demo.usage.js.map
