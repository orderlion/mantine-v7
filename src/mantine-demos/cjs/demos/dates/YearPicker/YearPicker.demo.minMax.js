'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.YearPicker,
    {
      value,
      onChange: setValue,
      minDate: new Date(2021, 1),
      maxDate: new Date(2028, 1)
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
//# sourceMappingURL=YearPicker.demo.minMax.js.map
