'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getPrecision(step) {
  if (!step)
    return 0;
  const split = step.toString().split(".");
  return split.length > 1 ? split[1].length : 0;
}

exports.getPrecision = getPrecision;
//# sourceMappingURL=get-precision.js.map
