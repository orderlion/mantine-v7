'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NativeSelect, { disabled: true, data: ["React", "Angular"], label: "Disabled NativeSelect" });
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=NativeSelect.demo.disabled.js.map
