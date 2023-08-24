'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.DateInput,
    {
      minDate: /* @__PURE__ */ new Date(),
      maxDate: dayjs__default(/* @__PURE__ */ new Date()).add(1, "month").toDate(),
      label: "Date input",
      placeholder: "Date input"
    }
  );
}
const minMax = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.minMax = minMax;
//# sourceMappingURL=DateInput.demo.minMax.js.map
