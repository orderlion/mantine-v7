'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function isInRange(date, range) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return dayjs__default(_range[0]).startOf("day").subtract(1, "ms").isBefore(date) && dayjs__default(_range[1]).endOf("day").add(1, "ms").isAfter(date);
}

exports.isInRange = isInRange;
//# sourceMappingURL=is-in-range.js.map
