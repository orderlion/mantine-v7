'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('dayjs/locale/ru');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DatesProvider, { settings: { locale: "ru", firstDayOfWeek: 0, weekendDays: [0] } }, /* @__PURE__ */ React__default.createElement(dates.MonthPickerInput, { label: "Pick month", placeholder: "Pick month" }), /* @__PURE__ */ React__default.createElement(dates.DatePickerInput, { mt: "md", label: "Pick date", placeholder: "Pick date" }));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=DatesProvider.demo.usage.js.map
