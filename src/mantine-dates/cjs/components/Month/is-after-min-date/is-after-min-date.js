'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? dayjs__default(date).isAfter(dayjs__default(minDate).subtract(1, "day"), "day") : true;
}

exports.isAfterMinDate = isAfterMinDate;
//# sourceMappingURL=is-after-min-date.js.map
