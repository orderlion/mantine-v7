'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isPrimitiveSize(size) {
  const isBaseSize = typeof size === "object" && size !== null && typeof size.base !== "undefined" && Object.keys(size).length === 1;
  return typeof size === "number" || typeof size === "string" || isBaseSize;
}

exports.isPrimitiveSize = isPrimitiveSize;
//# sourceMappingURL=is-primitive-size.js.map
