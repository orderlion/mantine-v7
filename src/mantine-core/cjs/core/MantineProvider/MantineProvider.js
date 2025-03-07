'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var suppressNextjsWarning = require('./suppress-nextjs-warning.js');
var Mantine_context = require('./Mantine.context.js');
var localStorageManager = require('./color-scheme-managers/local-storage-manager.js');
var useProviderColorScheme = require('./use-mantine-color-scheme/use-provider-color-scheme.js');
var useRespectReduceMotion = require('./use-respect-reduce-motion/use-respect-reduce-motion.js');
var MantineThemeProvider = require('./MantineThemeProvider/MantineThemeProvider.js');
var MantineCssVariables = require('./MantineCssVariables/MantineCssVariables.js');
var MantineClasses = require('./MantineClasses/MantineClasses.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

suppressNextjsWarning.suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageManager.localStorageColorSchemeManager(),
  defaultColorScheme = "auto",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme.useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion.useRespectReduceMotion({
    respectReducedMotion: (theme == null ? void 0 : theme.respectReducedMotion) || false,
    getRootElement
  });
  return /* @__PURE__ */ React__default.createElement(
    Mantine_context.MantineContext.Provider,
    {
      value: {
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector
      }
    },
    /* @__PURE__ */ React__default.createElement(MantineThemeProvider.MantineThemeProvider, { theme }, withCssVariables && /* @__PURE__ */ React__default.createElement(MantineCssVariables.MantineCssVariables, { cssVariablesSelector }), /* @__PURE__ */ React__default.createElement(MantineClasses.MantineClasses, null), children)
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

exports.MantineProvider = MantineProvider;
//# sourceMappingURL=MantineProvider.js.map
