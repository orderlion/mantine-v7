'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseThemeColor = require('../../core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.js');

function getMarkColor({ color, theme, defaultShade }) {
  const parsed = parseThemeColor.parseThemeColor({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--mantine-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

exports.getMarkColor = getMarkColor;
//# sourceMappingURL=get-mark-color.js.map
