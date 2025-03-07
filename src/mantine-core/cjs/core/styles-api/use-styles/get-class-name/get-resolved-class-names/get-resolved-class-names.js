'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolveClassNames = require('../resolve-class-names/resolve-class-names.js');

function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames.resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

exports.getResolvedClassNames = getResolvedClassNames;
//# sourceMappingURL=get-resolved-class-names.js.map
