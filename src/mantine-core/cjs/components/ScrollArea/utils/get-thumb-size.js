'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getThumbRatio = require('./get-thumb-ratio.js');

function getThumbSize(sizes) {
  const ratio = getThumbRatio.getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

exports.getThumbSize = getThumbSize;
//# sourceMappingURL=get-thumb-size.js.map
