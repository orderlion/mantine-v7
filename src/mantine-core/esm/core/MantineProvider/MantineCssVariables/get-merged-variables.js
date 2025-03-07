import { defaultCssVariablesResolver } from './default-css-variables-resolver.js';
import { deepMerge } from '../../utils/deep-merge/deep-merge.js';

function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator == null ? void 0 : generator(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

export { getMergedVariables };
//# sourceMappingURL=get-merged-variables.js.map
