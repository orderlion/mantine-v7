'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var isMonthDisabled = require('../is-month-disabled/is-month-disabled.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps) {
  const enabledMonths = months.flat().filter(
    (month) => {
      var _a;
      return !isMonthDisabled.isMonthDisabled(month, minDate, maxDate) && !((_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedMonth = enabledMonths.find((month) => {
    var _a;
    return (_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.selected;
  });
  if (selectedMonth) {
    return selectedMonth;
  }
  const currentMonth = enabledMonths.find((month) => dayjs__default().isSame(month, "month"));
  if (currentMonth) {
    return currentMonth;
  }
  return enabledMonths[0];
}

exports.getMonthInTabOrder = getMonthInTabOrder;
//# sourceMappingURL=get-month-in-tab-order.js.map
