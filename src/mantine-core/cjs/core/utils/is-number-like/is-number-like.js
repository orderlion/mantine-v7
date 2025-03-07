'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(")) {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}

exports.isNumberLike = isNumberLike;
//# sourceMappingURL=is-number-like.js.map
