'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  const [opened, { close, open }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(core.Popover, { width: 200, position: "bottom", withArrow: true, shadow: "md", opened }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, { onMouseEnter: open, onMouseLeave: close }, "Hover to see popover")), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, { style: { pointerEvents: "none" } }, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "This popover is shown when user hovers the target element")));
}
const hover = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.hover = hover;
//# sourceMappingURL=Popover.demo.hover.js.map
