'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Popover, { width: 200, position: "bottom", clickOutsideEvents: ["mouseup", "touchend"] }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle popover")), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "xs" }, "Popover will be closed with mouseup and touchend events")));
}
const clickOutsideEvents = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

exports.clickOutsideEvents = clickOutsideEvents;
//# sourceMappingURL=Popover.demo.clickOutsideEvents.js.map
