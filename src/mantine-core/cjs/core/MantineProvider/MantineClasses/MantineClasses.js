'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Mantine_context = require('../Mantine.context.js');
var MantineThemeProvider = require('../MantineThemeProvider/MantineThemeProvider.js');
var keys = require('../../utils/keys/keys.js');
var px = require('../../utils/units-converters/px.js');
var rem = require('../../utils/units-converters/rem.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MantineClasses() {
  const theme = MantineThemeProvider.useMantineTheme();
  const nonce = Mantine_context.useMantineStyleNonce();
  const classes = keys.keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const pxValue = px.px(theme.breakpoints[breakpoint]);
    return `${acc}@media (max-width: ${rem.em(
      pxValue - 0.1
    )}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${rem.em(
      pxValue
    )}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ React__default.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}

exports.MantineClasses = MantineClasses;
//# sourceMappingURL=MantineClasses.js.map
