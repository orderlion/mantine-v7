'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var validateValues = require('./validate-values.js');

function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues.validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find(
    (errorKey) => path.split(".").every((pathPart, i) => pathPart === errorKey.split(".")[i])
  );
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}

exports.validateFieldValue = validateFieldValue;
//# sourceMappingURL=validate-field-value.js.map
