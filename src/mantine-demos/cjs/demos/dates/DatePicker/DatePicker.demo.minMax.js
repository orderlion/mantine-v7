'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 25)}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.DatePicker,
    {
      value,
      onChange: setValue,
      defaultDate: new Date(2022, 1),
      minDate: new Date(2022, 1, 10),
      maxDate: new Date(2022, 1, 25)
    }
  );
}
const minMax = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.minMax = minMax;
//# sourceMappingURL=DatePicker.demo.minMax.js.map
