'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isResponsiveSize = require('../is-responsive-size/is-responsive-size.js');
var isPrimitiveSize = require('../is-primitive-size/is-primitive-size.js');
var getBaseSize = require('../get-base-size/get-base-size.js');
var rem = require('../../../../core/utils/units-converters/rem.js');
var keys = require('../../../../core/utils/keys/keys.js');
var getBreakpointValue = require('../../../../core/utils/get-breakpoint-value/get-breakpoint-value.js');

function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme
}) {
  var _a, _b, _c;
  const navbarWidth = navbar == null ? void 0 : navbar.width;
  const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
  const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
  if ((navbar == null ? void 0 : navbar.breakpoint) && !((_a = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] = maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] || {};
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-offset"] = "0px";
  }
  if (isPrimitiveSize.isPrimitiveSize(navbarWidth)) {
    const baseSize = rem.rem(getBaseSize.getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize.isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = rem.rem(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = rem.rem(navbarWidth.base);
    }
    keys.keys(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = rem.rem(navbarWidth[key]);
        minMediaStyles[key]["--app-shell-navbar-offset"] = rem.rem(navbarWidth[key]);
      }
    });
  }
  if ((_b = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = navbar.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
  }
  if ((_c = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = getBreakpointValue.getBreakpointValue(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

exports.assignNavbarVariables = assignNavbarVariables;
//# sourceMappingURL=assign-navbar-variables.js.map
