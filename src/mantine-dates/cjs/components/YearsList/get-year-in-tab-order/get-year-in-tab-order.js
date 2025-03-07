'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var isYearDisabled = require('../is-year-disabled/is-year-disabled.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getYearInTabOrder(years, minDate, maxDate, getYearControlProps) {
  const enabledYears = years.flat().filter(
    (year) => {
      var _a;
      return !isYearDisabled.isYearDisabled(year, minDate, maxDate) && !((_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedYear = enabledYears.find((year) => {
    var _a;
    return (_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.selected;
  });
  if (selectedYear) {
    return selectedYear;
  }
  const currentYear = enabledYears.find((year) => dayjs__default().isSame(year, "year"));
  if (currentYear) {
    return currentYear;
  }
  return enabledYears[0];
}

exports.getYearInTabOrder = getYearInTabOrder;
//# sourceMappingURL=get-year-in-tab-order.js.map
