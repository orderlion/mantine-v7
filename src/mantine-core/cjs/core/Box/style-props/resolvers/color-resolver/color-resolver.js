'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseThemeColor = require('../../../../MantineProvider/color-functions/parse-theme-color/parse-theme-color.js');

function colorResolver(color, theme) {
  const parsedColor = parseThemeColor.parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}

exports.colorResolver = colorResolver;
//# sourceMappingURL=color-resolver.js.map
