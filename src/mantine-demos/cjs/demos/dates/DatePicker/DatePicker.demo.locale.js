'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('dayjs/locale/ru');
var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.DatePicker, { locale: "ru" });
}
const locale = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.locale = locale;
//# sourceMappingURL=DatePicker.demo.locale.js.map
