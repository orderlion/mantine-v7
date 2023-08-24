'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(core.DEFAULT_THEME.colors).map((color) => `'${core.DEFAULT_THEME.colors[color][6]}'`).join(", ")}]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.ColorInput,
    {
      maw: 320,
      mx: "auto",
      placeholder: "Pick color",
      label: "Your favorite color",
      swatches: Object.keys(core.DEFAULT_THEME.colors).map((color) => core.DEFAULT_THEME.colors[color][6])
    }
  );
}
const swatches = {
  type: "code",
  component: Demo,
  code
};

exports.swatches = swatches;
//# sourceMappingURL=ColorInput.demo.swatches.js.map
