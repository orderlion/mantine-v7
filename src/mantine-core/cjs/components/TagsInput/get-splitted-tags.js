'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function splitTags(splitChars, value) {
  if (!splitChars)
    return [value];
  return value.split(new RegExp(`[${splitChars.join("")}]`)).map((tag) => tag.trim()).filter((tag) => tag !== "");
}
function getSplittedTags({
  splitChars,
  allowDuplicates,
  maxTags,
  value,
  currentTags
}) {
  const splitted = splitTags(splitChars, value);
  const merged = allowDuplicates ? [...currentTags, ...splitted] : [.../* @__PURE__ */ new Set([...currentTags, ...splitted])];
  return maxTags ? merged.slice(0, maxTags) : merged;
}

exports.getSplittedTags = getSplittedTags;
//# sourceMappingURL=get-splitted-tags.js.map
