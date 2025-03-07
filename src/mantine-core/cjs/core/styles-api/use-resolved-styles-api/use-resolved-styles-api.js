'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolveClassNames = require('../use-styles/get-class-name/resolve-class-names/resolve-class-names.js');
var resolveStyles = require('../use-styles/get-style/resolve-styles/resolve-styles.js');
var MantineThemeProvider = require('../../MantineProvider/MantineThemeProvider/MantineThemeProvider.js');

function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = MantineThemeProvider.useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames.resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles.resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

exports.useResolvedStylesApi = useResolvedStylesApi;
//# sourceMappingURL=use-resolved-styles-api.js.map
