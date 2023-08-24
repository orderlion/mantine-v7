'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Badge, { fullWidth: true }, "Full width badge");
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

exports.fullWidth = fullWidth;
//# sourceMappingURL=Badge.demo.fullWidth.js.map
