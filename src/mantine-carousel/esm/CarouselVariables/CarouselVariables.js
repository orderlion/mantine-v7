import React from 'react';
import { useMantineTheme, filterProps, getSpacing, getBaseValue, keys, getSortedBreakpoints, InlineStyles } from '@mantine/core';

function CarouselVariables({ slideGap, slideSize, selector }) {
  var _a;
  const theme = useMantineTheme();
  const baseStyles = filterProps({
    "--carousel-slide-gap": getSpacing(getBaseValue(slideGap)),
    "--carousel-slide-size": (_a = getBaseValue(slideSize)) == null ? void 0 : _a.toString()
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-gap"] = getSpacing(slideGap[breakpoint]);
      }
      if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
        acc[breakpoint]["--carousel-slide-size"] = getSpacing(slideSize[breakpoint]);
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

export { CarouselVariables };
//# sourceMappingURL=CarouselVariables.js.map
