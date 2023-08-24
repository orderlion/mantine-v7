'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { disabled: true }, "Disabled button");
}
const disabled = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=Button.demo.disabled.js.map
