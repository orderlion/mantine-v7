'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Mantine_context = require('../Mantine.context.js');
var convertCssVariables = require('../convert-css-variables/convert-css-variables.js');
var getMergedVariables = require('./get-merged-variables.js');
var removeDefaultVariables = require('./remove-default-variables.js');
var MantineThemeProvider = require('../MantineThemeProvider/MantineThemeProvider.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({ cssVariablesSelector }) {
  const theme = MantineThemeProvider.useMantineTheme();
  const nonce = Mantine_context.useMantineStyleNonce();
  const generator = Mantine_context.useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables.getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables.removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables.convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ React__default.createElement(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

exports.MantineCssVariables = MantineCssVariables;
//# sourceMappingURL=MantineCssVariables.js.map
