'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolveClassNames = require('../resolve-class-names/resolve-class-names.js');

function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames.resolveClassNames({
    theme,
    classNames: options == null ? void 0 : options.classNames,
    props: (options == null ? void 0 : options.props) || props,
    stylesCtx
  })[selector];
}

exports.getOptionsClassNames = getOptionsClassNames;
//# sourceMappingURL=get-options-class-names.js.map
