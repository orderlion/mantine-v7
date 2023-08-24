'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.MonthPicker,
    {
      value,
      onChange: setValue,
      defaultDate: new Date(2022, 1),
      minDate: new Date(2022, 1, 1),
      maxDate: new Date(2022, 8, 1)
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
//# sourceMappingURL=MonthPicker.demo.minMax.js.map
