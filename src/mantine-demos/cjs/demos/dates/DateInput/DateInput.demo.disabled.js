'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DateInput, { label: "Disabled", placeholder: "Date input", disabled: true });
}
const disabled = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=DateInput.demo.disabled.js.map
