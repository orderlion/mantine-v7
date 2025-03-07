'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getPath = require('./get-path.js');
var setPath = require('./set-path.js');

function removePath(path, index, values) {
  const currentValue = getPath.getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  return setPath.setPath(
    path,
    currentValue.filter((_, itemIndex) => itemIndex !== index),
    values
  );
}

exports.removePath = removePath;
//# sourceMappingURL=remove-path.js.map
