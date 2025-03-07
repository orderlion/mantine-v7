'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var px = require('../units-converters/px.js');

function getBreakpointValue(breakpoint, theme) {
  if (breakpoint in theme.breakpoints) {
    return px.px(theme.breakpoints[breakpoint]);
  }
  return px.px(breakpoint);
}

exports.getBreakpointValue = getBreakpointValue;
//# sourceMappingURL=get-breakpoint-value.js.map
