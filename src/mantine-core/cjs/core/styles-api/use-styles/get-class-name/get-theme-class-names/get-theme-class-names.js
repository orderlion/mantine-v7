'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolveClassNames = require('../resolve-class-names/resolve-class-names.js');

function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => {
      var _a, _b;
      return (_b = resolveClassNames.resolveClassNames({
        theme,
        classNames: (_a = theme.components[n]) == null ? void 0 : _a.classNames,
        props,
        stylesCtx
      })) == null ? void 0 : _b[selector];
    }
  );
}

exports.getThemeClassNames = getThemeClassNames;
//# sourceMappingURL=get-theme-class-names.js.map
