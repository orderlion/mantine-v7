'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function filterErrors(errors) {
  if (errors === null || typeof errors !== "object") {
    return {};
  }
  return Object.keys(errors).reduce((acc, key) => {
    const errorValue = errors[key];
    if (errorValue !== void 0 && errorValue !== null && errorValue !== false) {
      acc[key] = errorValue;
    }
    return acc;
  }, {});
}

exports.filterErrors = filterErrors;
//# sourceMappingURL=filter-errors.js.map
