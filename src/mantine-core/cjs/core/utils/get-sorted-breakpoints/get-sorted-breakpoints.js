'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getBreakpointValue = require('../get-breakpoint-value/get-breakpoint-value.js');

function getSortedBreakpoints(breakpoints, theme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue.getBreakpointValue(breakpoint, theme)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

exports.getSortedBreakpoints = getSortedBreakpoints;
//# sourceMappingURL=get-sorted-breakpoints.js.map
