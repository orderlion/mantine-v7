'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createPinArray(length, value) {
  if (length < 1) {
    return [];
  }
  const values = new Array(length).fill("");
  if (value) {
    const splitted = value.trim().split("");
    for (let i = 0; i < Math.min(length, splitted.length); i += 1) {
      values[i] = splitted[i];
    }
  }
  return values;
}

exports.createPinArray = createPinArray;
//# sourceMappingURL=create-pin-array.js.map
