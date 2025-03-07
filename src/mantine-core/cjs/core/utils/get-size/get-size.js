'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNumberLike = require('../is-number-like/is-number-like.js');
var rem = require('../units-converters/rem.js');

function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return isNumberLike.isNumberLike(size) ? convertToRem ? rem.rem(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
  if (!size) {
    return "none";
  }
  return getSize(size, "mantine-shadow");
}

exports.getFontSize = getFontSize;
exports.getLineHeight = getLineHeight;
exports.getRadius = getRadius;
exports.getShadow = getShadow;
exports.getSize = getSize;
exports.getSpacing = getSpacing;
//# sourceMappingURL=get-size.js.map
