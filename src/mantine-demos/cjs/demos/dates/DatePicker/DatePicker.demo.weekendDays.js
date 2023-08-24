'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DatePicker, { weekendDays: [1, 2] });
}
const weekendDays = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.weekendDays = weekendDays;
//# sourceMappingURL=DatePicker.demo.weekendDays.js.map
