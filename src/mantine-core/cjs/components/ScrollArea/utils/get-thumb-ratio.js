'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

exports.getThumbRatio = getThumbRatio;
//# sourceMappingURL=get-thumb-ratio.js.map
