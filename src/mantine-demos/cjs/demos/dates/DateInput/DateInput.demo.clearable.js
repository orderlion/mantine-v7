'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput clearable defaultValue={new Date()} label="Date input" placeholder="Date input" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DateInput, { clearable: true, defaultValue: /* @__PURE__ */ new Date(), label: "Date input", placeholder: "Date input" });
}
const clearable = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.clearable = clearable;
//# sourceMappingURL=DateInput.demo.clearable.js.map
