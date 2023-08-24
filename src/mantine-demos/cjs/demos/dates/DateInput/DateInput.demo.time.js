'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var customParseFormat__default = /*#__PURE__*/_interopDefaultLegacy(customParseFormat);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

dayjs__default.extend(customParseFormat__default);
const code = `
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateInput } from '@mantine/dates';

// It is required to extend dayjs with customParseFormat plugin
// in order to parse dates with custom format
dayjs.extend(customParseFormat);

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DateInput, { valueFormat: "DD/MM/YYYY HH:mm:ss", label: "Date input", placeholder: "Date input" });
}
const time = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.time = time;
//# sourceMappingURL=DateInput.demo.time.js.map
