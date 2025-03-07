'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getSize = require('../../../../core/utils/get-size/get-size.js');

function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSize.getSpacing(padding);
}

exports.getPaddingValue = getPaddingValue;
//# sourceMappingURL=get-padding-value.js.map
