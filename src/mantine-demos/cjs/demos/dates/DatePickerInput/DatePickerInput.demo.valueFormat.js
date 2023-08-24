'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.DatePickerInput,
    {
      valueFormat: "YYYY MMM DD",
      type: "multiple",
      label: "Pick date",
      placeholder: "Pick date"
    }
  );
}
const valueFormat = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.valueFormat = valueFormat;
//# sourceMappingURL=DatePickerInput.demo.valueFormat.js.map
