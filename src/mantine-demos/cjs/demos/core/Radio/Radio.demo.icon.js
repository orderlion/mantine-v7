'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Radio, { icon: core.CheckIcon, label: "Custom check icon", name: "check", value: "check", defaultChecked: true });
}
const icon = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.icon = icon;
//# sourceMappingURL=Radio.demo.icon.js.map
