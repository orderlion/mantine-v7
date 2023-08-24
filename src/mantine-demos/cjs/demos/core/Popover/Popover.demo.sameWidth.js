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
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Popover, { width: "target", position: "bottom", withArrow: true, shadow: "md" }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, { w: 280 }, "Toggle popover")), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm" }, "This popover has same width as target, it is useful when you are building input dropdowns")));
}
const sameWidth = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.sameWidth = sameWidth;
//# sourceMappingURL=Popover.demo.sameWidth.js.map
