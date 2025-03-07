import React from 'react';
import { useMantineTheme } from '../../core/MantineProvider/MantineThemeProvider/MantineThemeProvider.js';
import { filterProps } from '../../core/utils/filter-props/filter-props.js';
import { getSpacing } from '../../core/utils/get-size/get-size.js';
import { getBaseValue } from '../../core/utils/get-base-value/get-base-value.js';
import { keys } from '../../core/utils/keys/keys.js';
import { getSortedBreakpoints } from '../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js';
import { InlineStyles } from '../../core/InlineStyles/InlineStyles.js';

function SimpleGridVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = useMantineTheme();
  const baseStyles = filterProps({
    "--sg-spacing-x": getSpacing(getBaseValue(spacing)),
    "--sg-spacing-y": getSpacing(getBaseValue(verticalSpacing)),
    "--sg-cols": (_a = getBaseValue(cols)) == null ? void 0 : _a.toString()
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-x"] = getSpacing(spacing[breakpoint]);
      }
      if (typeof verticalSpacing === "object" && verticalSpacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-y"] = getSpacing(verticalSpacing[breakpoint]);
      }
      if (typeof cols === "object" && cols[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-cols"] = cols[breakpoint];
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

export { SimpleGridVariables };
//# sourceMappingURL=SimpleGridVariables.js.map
