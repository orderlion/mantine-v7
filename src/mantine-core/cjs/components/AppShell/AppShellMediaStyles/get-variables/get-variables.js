'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assignAsideVariables = require('../assign-aside-variables/assign-aside-variables.js');
var assignFooterVariables = require('../assign-footer-variables/assign-footer-variables.js');
var assignHeaderVariables = require('../assign-header-variables/assign-header-variables.js');
var assignNavbarVariables = require('../assign-navbar-variables/assign-navbar-variables.js');
var assignPaddingVariables = require('../assign-padding-variables/assign-padding-variables.js');
var getSortedBreakpoints = require('../../../../core/utils/get-sorted-breakpoints/get-sorted-breakpoints.js');
var rem = require('../../../../core/utils/units-converters/rem.js');
var keys = require('../../../../core/utils/keys/keys.js');

function getVariables({ navbar, header, footer, aside, padding, theme }) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables.assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables.assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables.assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables.assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables.assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = getSortedBreakpoints.getSortedBreakpoints(keys.keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${rem.em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value]
  }));
  const maxMedia = getSortedBreakpoints.getSortedBreakpoints(keys.keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${rem.em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value]
  }));
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

exports.getVariables = getVariables;
//# sourceMappingURL=get-variables.js.map
