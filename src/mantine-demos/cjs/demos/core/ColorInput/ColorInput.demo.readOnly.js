'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.ColorInput,
    {
      maw: 320,
      mx: "auto",
      disallowInput: true,
      placeholder: "Pick color",
      label: "Your favorite color"
    }
  );
}
const readOnly = {
  type: "code",
  component: Demo,
  code
};

exports.readOnly = readOnly;
//# sourceMappingURL=ColorInput.demo.readOnly.js.map
