'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MantineThemeProvider = require('../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var filterProps = require('../../core/utils/filter-props/filter-props.js');
var getSize = require('../../core/utils/get-size/get-size.js');
var getBaseValue = require('../../core/utils/get-base-value/get-base-value.js');
var keys = require('../../core/utils/keys/keys.js');
var getSortedBreakpoints = require('../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js');
var InlineStyles = require('../../core/InlineStyles/InlineStyles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = MantineThemeProvider.useMantineTheme();
  const baseStyles = filterProps.filterProps({
    "--sg-spacing-x": getSize.getSpacing(getBaseValue.getBaseValue(spacing)),
    "--sg-spacing-y": getSize.getSpacing(getBaseValue.getBaseValue(verticalSpacing)),
    "--sg-cols": (_a = getBaseValue.getBaseValue(cols)) == null ? void 0 : _a.toString()
  });
  const queries = keys.keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-x"] = getSize.getSpacing(spacing[breakpoint]);
      }
      if (typeof verticalSpacing === "object" && verticalSpacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-y"] = getSize.getSpacing(verticalSpacing[breakpoint]);
      }
      if (typeof cols === "object" && cols[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-cols"] = cols[breakpoint];
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints.getSortedBreakpoints(keys.keys(queries), theme).filter(
    (breakpoint) => keys.keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React__default.createElement(InlineStyles.InlineStyles, { styles: baseStyles, media, selector });
}

exports.SimpleGridVariables = SimpleGridVariables;
//# sourceMappingURL=SimpleGridVariables.js.map
