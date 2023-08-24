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
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(
    dates.MonthPicker,
    {
      decadeLabelFormat: "YY",
      yearLabelFormat: "YYYY [year]",
      value,
      onChange: setValue
    }
  );
}
const labelFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.labelFormat = labelFormat;
//# sourceMappingURL=MonthPicker.demo.labelFormat.js.map
