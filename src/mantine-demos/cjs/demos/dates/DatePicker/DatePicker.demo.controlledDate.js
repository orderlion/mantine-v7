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
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState([null, null]);
  const [date, setDate] = React.useState(/* @__PURE__ */ new Date());
  const handleChange = (val) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear(), current.getMonth() + 1));
    }
    setValue(val);
  };
  return /* @__PURE__ */ React__default.createElement(
    dates.DatePicker,
    {
      date,
      onDateChange: setDate,
      type: "range",
      value,
      onChange: handleChange
    }
  );
}
const controlledDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.controlledDate = controlledDate;
//# sourceMappingURL=DatePicker.demo.controlledDate.js.map
