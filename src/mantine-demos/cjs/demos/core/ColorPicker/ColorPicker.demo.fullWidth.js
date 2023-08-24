'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.ColorPicker, { fullWidth: true, size: "lg", format: "rgba" });
}
const fullWidth = {
  type: "code",
  component: Demo,
  code
};

exports.fullWidth = fullWidth;
//# sourceMappingURL=ColorPicker.demo.fullWidth.js.map
