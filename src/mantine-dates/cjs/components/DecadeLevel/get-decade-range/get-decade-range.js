'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getYearsData = require('../../YearsList/get-years-data/get-years-data.js');

function getDecadeRange(decade) {
  const years = getYearsData.getYearsData(decade);
  return [years[0][0], years[3][0]];
}

exports.getDecadeRange = getDecadeRange;
//# sourceMappingURL=get-decade-range.js.map
