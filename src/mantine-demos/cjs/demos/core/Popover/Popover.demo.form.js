'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Popover, { width: 300, trapFocus: true, position: "bottom", withArrow: true, shadow: "md" }, /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(core.Button, null, "Toggle popover")), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Name", placeholder: "Name", size: "xs" }), /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Email", placeholder: "john@doe.com", size: "xs", mt: "xs" })));
}
const form = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

exports.form = form;
//# sourceMappingURL=Popover.demo.form.js.map
