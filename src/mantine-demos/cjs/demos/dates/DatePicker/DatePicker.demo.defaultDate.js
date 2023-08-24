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
  return <DatePicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(dates.DatePicker, { defaultDate: new Date(2015, 1), value, onChange: setValue });
}
const defaultDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.defaultDate = defaultDate;
//# sourceMappingURL=DatePicker.demo.defaultDate.js.map
