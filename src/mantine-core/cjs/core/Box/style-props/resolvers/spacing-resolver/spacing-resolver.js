'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rem = require('../../../../utils/units-converters/rem.js');

function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem.rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem.rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

exports.spacingResolver = spacingResolver;
//# sourceMappingURL=spacing-resolver.js.map
