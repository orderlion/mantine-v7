'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.UnstyledButton, null, "Button without styles");
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.usage = usage;
//# sourceMappingURL=UnstyledButton.demo.usage.js.map
