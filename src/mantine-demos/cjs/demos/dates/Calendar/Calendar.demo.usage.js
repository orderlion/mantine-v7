'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.Calendar, null);
}
const usage = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Calendar.demo.usage.js.map
