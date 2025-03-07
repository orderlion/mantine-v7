import { deepMerge } from '../../utils/deep-merge/deep-merge.js';

function mergeThemeOverrides(...overrides) {
  return overrides.reduce((acc, override) => deepMerge(acc, override), {});
}

export { mergeThemeOverrides };
//# sourceMappingURL=merge-theme-overrides.js.map
