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
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;
function Demo() {
  const [visible, { toggle }] = hooks.useDisclosure(true);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Box, { pos: "relative" }, /* @__PURE__ */ React__default.createElement(
    core.LoadingOverlay,
    {
      visible,
      zIndex: 1e3,
      overlayProps: { radius: "sm", blur: 2 },
      loaderProps: { color: "pink", type: "bars" }
    }
  ), /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, { noSubmit: true })), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle }, "Toggle overlay")));
}
const loaderProps = {
  centered: true,
  maxWidth: 400,
  dimmed: true,
  type: "code",
  code,
  component: Demo
};

exports.Demo = Demo;
exports.loaderProps = loaderProps;
//# sourceMappingURL=LoadingOverlay.demo.loaderProps.js.map
