'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-line-height-${value})`;
  }
  return value;
}

exports.lineHeightResolver = lineHeightResolver;
//# sourceMappingURL=line-height-resolver.js.map
