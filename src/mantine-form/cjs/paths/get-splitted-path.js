'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getSplittedPath(path) {
  if (typeof path !== "string") {
    return [];
  }
  return path.split(".");
}

exports.getSplittedPath = getSplittedPath;
//# sourceMappingURL=get-splitted-path.js.map
