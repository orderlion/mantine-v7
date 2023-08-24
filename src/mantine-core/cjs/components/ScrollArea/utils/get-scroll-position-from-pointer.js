'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getThumbSize = require('./get-thumb-size.js');
var linearScale = require('./linear-scale.js');

function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize.getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale.linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

exports.getScrollPositionFromPointer = getScrollPositionFromPointer;
//# sourceMappingURL=get-scroll-position-from-pointer.js.map
