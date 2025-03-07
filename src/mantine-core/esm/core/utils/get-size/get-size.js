import { isNumberLike } from '../is-number-like/is-number-like.js';
import { rem } from '../units-converters/rem.js';

function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return isNumberLike(size) ? convertToRem ? rem(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
  if (!size) {
    return "none";
  }
  return getSize(size, "mantine-shadow");
}

export { getFontSize, getLineHeight, getRadius, getShadow, getSize, getSpacing };
//# sourceMappingURL=get-size.js.map
