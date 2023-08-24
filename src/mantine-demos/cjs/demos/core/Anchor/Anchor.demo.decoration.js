'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "always" }, "Underline always"), /* @__PURE__ */ React__default.createElement(core.Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "hover" }, "Underline hover"), /* @__PURE__ */ React__default.createElement(core.Anchor, { href: "https://mantine.dev/", target: "_blank", underline: "never" }, "Underline never"));
}
const decoration = {
  type: "code",
  component: Demo,
  code
};

exports.decoration = decoration;
//# sourceMappingURL=Anchor.demo.decoration.js.map
