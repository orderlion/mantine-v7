'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toRgba = require('../to-rgba/to-rgba.js');

function getPartLuminance(value) {
  const x = value / 255;
  return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}
function getLuminance(input) {
  const r = getPartLuminance(input.r);
  const g = getPartLuminance(input.g);
  const b = getPartLuminance(input.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  return getLuminance(toRgba.toRgba(color)) > luminanceThreshold;
}

exports.getLuminance = getLuminance;
exports.isLightColor = isLightColor;
//# sourceMappingURL=is-light-color.js.map
