'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? dayjs__default(date).isBefore(dayjs__default(maxDate).add(1, "day"), "day") : true;
}

exports.isBeforeMaxDate = isBeforeMaxDate;
//# sourceMappingURL=is-before-max-date.js.map
