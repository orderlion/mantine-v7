'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { fullWidth: true }, "Full width button");
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

exports.fullWidth = fullWidth;
//# sourceMappingURL=Button.demo.fullWidth.js.map
