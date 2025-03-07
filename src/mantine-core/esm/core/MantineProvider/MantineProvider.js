import React from 'react';
import { suppressNextjsWarning } from './suppress-nextjs-warning.js';
import { MantineContext } from './Mantine.context.js';
import { localStorageColorSchemeManager } from './color-scheme-managers/local-storage-manager.js';
import { useProviderColorScheme } from './use-mantine-color-scheme/use-provider-color-scheme.js';
import { useRespectReduceMotion } from './use-respect-reduce-motion/use-respect-reduce-motion.js';
import { MantineThemeProvider } from './MantineThemeProvider/MantineThemeProvider.js';
import { MantineCssVariables } from './MantineCssVariables/MantineCssVariables.js';
import { MantineClasses } from './MantineClasses/MantineClasses.js';

suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "auto",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: (theme == null ? void 0 : theme.respectReducedMotion) || false,
    getRootElement
  });
  return /* @__PURE__ */ React.createElement(
    MantineContext.Provider,
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
    /* @__PURE__ */ React.createElement(MantineThemeProvider, { theme }, withCssVariables && /* @__PURE__ */ React.createElement(MantineCssVariables, { cssVariablesSelector }), /* @__PURE__ */ React.createElement(MantineClasses, null), children)
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

export { MantineProvider };
//# sourceMappingURL=MantineProvider.js.map
