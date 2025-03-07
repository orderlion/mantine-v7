'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Grid_context = require('../Grid.context.js');
var getBaseValue = require('../../../core/utils/get-base-value/get-base-value.js');
var MantineThemeProvider = require('../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var filterProps = require('../../../core/utils/filter-props/filter-props.js');
var keys = require('../../../core/utils/keys/keys.js');
var getSortedBreakpoints = require('../../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js');
var InlineStyles = require('../../../core/InlineStyles/InlineStyles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getColumnFlexBasis = (colSpan, columns) => {
  if (colSpan === "content") {
    return "auto";
  }
  if (colSpan === "auto") {
    return "0rem";
  }
  return colSpan ? `${100 / (columns / colSpan)}%` : void 0;
};
const getColumnMaxWidth = (colSpan, columns, grow) => {
  if (grow || colSpan === "auto" || colSpan === "content") {
    return "unset";
  }
  return getColumnFlexBasis(colSpan, columns);
};
const getColumnFlexGrow = (colSpan, grow) => {
  if (!colSpan) {
    return void 0;
  }
  return colSpan === "auto" || grow ? "1" : void 0;
};
const getColumnOffset = (offset, columns) => offset === 0 ? "0" : offset ? `${100 / (columns / offset)}%` : void 0;
function GridColVariables({ span, order, offset, selector }) {
  var _a;
  const theme = MantineThemeProvider.useMantineTheme();
  const ctx = Grid_context.useGridContext();
  const baseSpan = getBaseValue.getBaseValue(span);
  const baseStyles = filterProps.filterProps({
    "--col-order": (_a = getBaseValue.getBaseValue(order)) == null ? void 0 : _a.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue.getBaseValue(offset), ctx.columns)
  });
  const queries = keys.keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      var _a2;
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof order === "object" && order[breakpoint] !== void 0) {
        acc[breakpoint]["--col-order"] = (_a2 = order[breakpoint]) == null ? void 0 : _a2.toString();
      }
      if (typeof span === "object" && span[breakpoint] !== void 0) {
        acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(span[breakpoint], ctx.grow);
        acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(span[breakpoint], ctx.columns);
        acc[breakpoint]["--col-width"] = span[breakpoint] === "content" ? "auto" : void 0;
        acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
          span[breakpoint],
          ctx.columns,
          ctx.grow
        );
      }
      if (typeof offset === "object" && offset[breakpoint] !== void 0) {
        acc[breakpoint]["--col-offset"] = getColumnOffset(offset[breakpoint], ctx.columns);
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

exports.GridColVariables = GridColVariables;
//# sourceMappingURL=GridColVariables.js.map
