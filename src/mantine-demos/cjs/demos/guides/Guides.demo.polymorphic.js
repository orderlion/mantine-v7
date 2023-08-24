'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { component: "a", href: "https://mantine.dev/", target: "_blank" }, "Mantine website");
}
const polymorphic = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.polymorphic = polymorphic;
//# sourceMappingURL=Guides.demo.polymorphic.js.map
