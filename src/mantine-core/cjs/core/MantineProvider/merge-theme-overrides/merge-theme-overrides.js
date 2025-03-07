'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var deepMerge = require('../../utils/deep-merge/deep-merge.js');

function mergeThemeOverrides(...overrides) {
  return overrides.reduce((acc, override) => deepMerge.deepMerge(acc, override), {});
}

exports.mergeThemeOverrides = mergeThemeOverrides;
//# sourceMappingURL=merge-theme-overrides.js.map
