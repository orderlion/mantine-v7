'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultCssVariablesResolver = require('./default-css-variables-resolver.js');
var deepMerge = require('../../utils/deep-merge/deep-merge.js');

function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver.defaultCssVariablesResolver(theme);
  const providerGenerator = generator == null ? void 0 : generator(theme);
  return providerGenerator ? deepMerge.deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

exports.getMergedVariables = getMergedVariables;
//# sourceMappingURL=get-merged-variables.js.map
