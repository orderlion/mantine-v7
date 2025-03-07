'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isResponsiveSize = require('../is-responsive-size/is-responsive-size.js');
var isPrimitiveSize = require('../is-primitive-size/is-primitive-size.js');
var getBaseSize = require('../get-base-size/get-base-size.js');
var rem = require('../../../../core/utils/units-converters/rem.js');
var keys = require('../../../../core/utils/keys/keys.js');

function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  var _a;
  const footerHeight = footer == null ? void 0 : footer.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = (_a = footer == null ? void 0 : footer.offset) != null ? _a : true;
  if (isPrimitiveSize.isPrimitiveSize(footerHeight)) {
    const baseSize = rem.rem(getBaseSize.getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize.isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem.rem(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem.rem(footerHeight.base);
      }
    }
    keys.keys(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem.rem(footerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem.rem(footerHeight[key]);
        }
      }
    });
  }
  if (footer == null ? void 0 : footer.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

exports.assignFooterVariables = assignFooterVariables;
//# sourceMappingURL=assign-footer-variables.js.map
