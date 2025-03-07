'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var getVariables = require('./get-variables/get-variables.js');
var Mantine_context = require('../../../core/MantineProvider/Mantine.context.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var InlineStyles = require('../../../core/InlineStyles/InlineStyles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = MantineThemeProvider.useMantineTheme();
  const ctx = Mantine_context.useMantineContext();
  const { media, baseStyles } = getVariables.getVariables({ navbar, header, footer, aside, padding, theme });
  return /* @__PURE__ */ React__default.createElement(InlineStyles.InlineStyles, { media, styles: baseStyles, selector: ctx.cssVariablesSelector });
}

exports.AppShellMediaStyles = AppShellMediaStyles;
//# sourceMappingURL=AppShellMediaStyles.js.map
