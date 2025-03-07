'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var keys = require('../../utils/keys/keys.js');
var camelToKebabCase = require('../../utils/camel-to-kebab-case/camel-to-kebab-case.js');

function cssObjectToString(css) {
  return keys.keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase.camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

exports.cssObjectToString = cssObjectToString;
//# sourceMappingURL=css-object-to-string.js.map
