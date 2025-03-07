'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

exports.camelToKebabCase = camelToKebabCase;
//# sourceMappingURL=camel-to-kebab-case.js.map
