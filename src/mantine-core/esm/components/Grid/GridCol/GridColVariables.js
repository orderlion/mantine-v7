import React from 'react';
import { useGridContext } from '../Grid.context.js';
import { getBaseValue } from '../../../core/utils/get-base-value/get-base-value.js';
import { useMantineTheme } from '../../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { filterProps } from '../../../core/utils/filter-props/filter-props.js';
import { keys } from '../../../core/utils/keys/keys.js';
import { getSortedBreakpoints } from '../../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js';
import { InlineStyles } from '../../../core/InlineStyles/InlineStyles.js';

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
  const theme = useMantineTheme();
  const ctx = useGridContext();
  const baseSpan = getBaseValue(span);
  const baseStyles = filterProps({
    "--col-order": (_a = getBaseValue(order)) == null ? void 0 : _a.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue(offset), ctx.columns)
  });
  const queries = keys(theme.breakpoints).reduce(
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
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return /* @__PURE__ */ React.createElement(InlineStyles, { styles: baseStyles, media, selector });
}

export { GridColVariables };
//# sourceMappingURL=GridColVariables.js.map
