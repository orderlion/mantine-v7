'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.DateTimePicker,
    {
      dropdownType: "modal",
      label: "Pick date and time",
      placeholder: "Pick date and time"
    }
  );
}
const modal = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.modal = modal;
//# sourceMappingURL=DateTimePicker.demo.modal.js.map
