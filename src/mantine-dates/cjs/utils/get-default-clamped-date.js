'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function getDefaultClampedDate({ minDate, maxDate }) {
  const today = /* @__PURE__ */ new Date();
  if (!minDate && !maxDate) {
    return today;
  }
  if (minDate && dayjs__default(today).isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && dayjs__default(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

exports.getDefaultClampedDate = getDefaultClampedDate;
//# sourceMappingURL=get-default-clamped-date.js.map
