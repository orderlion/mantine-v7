'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DatePicker, { monthsListFormat: "MM", yearsListFormat: "YY" });
}
const listFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.listFormat = listFormat;
//# sourceMappingURL=DatePicker.demo.listFormat.js.map
