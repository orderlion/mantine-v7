'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isYearDisabled(year, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && dayjs__default(year).isBefore(minDate, "year")) {
    return true;
  }
  if (maxDate && dayjs__default(year).isAfter(maxDate, "year")) {
    return true;
  }
  return false;
}

exports.isYearDisabled = isYearDisabled;
//# sourceMappingURL=is-year-disabled.js.map
