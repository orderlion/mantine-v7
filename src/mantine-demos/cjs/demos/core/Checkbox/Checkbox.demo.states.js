'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stack, null, /* @__PURE__ */ React__default.createElement(core.Checkbox, { checked: false, label: "Default checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { checked: false, indeterminate: true, label: "Indeterminate checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { checked: true, indeterminate: true, label: "Indeterminate checked checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { checked: true, label: "Checked checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { disabled: true, label: "Disabled checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { disabled: true, checked: true, label: "Disabled checked checkbox" }), /* @__PURE__ */ React__default.createElement(core.Checkbox, { disabled: true, indeterminate: true, label: "Disabled indeterminate checkbox" }));
}
const states = {
  type: "code",
  component: Demo,
  code
};

exports.states = states;
//# sourceMappingURL=Checkbox.demo.states.js.map
