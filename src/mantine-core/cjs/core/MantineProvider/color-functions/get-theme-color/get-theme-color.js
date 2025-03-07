'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseThemeColor = require('../parse-theme-color/parse-theme-color.js');

function getThemeColor(color, theme) {
  const parsed = parseThemeColor.parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

exports.getThemeColor = getThemeColor;
//# sourceMappingURL=get-theme-color.js.map
