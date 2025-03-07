'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var defaultTheme = require('../default-theme.js');
var mergeMantineTheme = require('../merge-mantine-theme/merge-mantine-theme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const MantineThemeContext = React.createContext(null);
const useSafeMantineTheme = () => React.useContext(MantineThemeContext) || defaultTheme.DEFAULT_THEME;
function useMantineTheme() {
  const ctx = React.useContext(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = React.useMemo(
    () => mergeMantineTheme.mergeMantineTheme(inherit ? parentTheme : defaultTheme.DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ React__default.createElement(MantineThemeContext.Provider, { value: mergedTheme }, children);
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

exports.MantineThemeContext = MantineThemeContext;
exports.MantineThemeProvider = MantineThemeProvider;
exports.useMantineTheme = useMantineTheme;
exports.useSafeMantineTheme = useSafeMantineTheme;
//# sourceMappingURL=MantineThemeProvider.js.map
