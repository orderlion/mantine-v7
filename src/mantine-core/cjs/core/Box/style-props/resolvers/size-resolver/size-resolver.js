'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rem = require('../../../../utils/units-converters/rem.js');

function sizeResolver(value) {
  if (typeof value === "number") {
    return rem.rem(value);
  }
  return value;
}

exports.sizeResolver = sizeResolver;
//# sourceMappingURL=size-resolver.js.map
