'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.MonthPickerInput,
    {
      valueFormat: "YYYY MMM",
      type: "multiple",
      label: "Pick month",
      placeholder: "Pick month"
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
//# sourceMappingURL=MonthPickerInput.demo.valueFormat.js.map
