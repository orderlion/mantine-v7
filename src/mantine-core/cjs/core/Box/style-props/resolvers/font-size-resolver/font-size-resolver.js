'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rem = require('../../../../utils/units-converters/rem.js');

function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "number") {
    return rem.rem(value);
  }
  if (typeof value === "string") {
    return rem.rem(value);
  }
  return value;
}

exports.fontSizeResolver = fontSizeResolver;
//# sourceMappingURL=font-size-resolver.js.map
