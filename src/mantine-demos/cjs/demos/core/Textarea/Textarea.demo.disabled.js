'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 320, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Textarea, { label: "Disabled", placeholder: "Your comment", disabled: true }));
}
const disabled = {
  type: "code",
  code,
  component: Demo
};

exports.disabled = disabled;
//# sourceMappingURL=Textarea.demo.disabled.js.map
