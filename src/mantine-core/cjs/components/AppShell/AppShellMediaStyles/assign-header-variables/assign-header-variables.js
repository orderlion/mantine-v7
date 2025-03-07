'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isResponsiveSize = require('../is-responsive-size/is-responsive-size.js');
var isPrimitiveSize = require('../is-primitive-size/is-primitive-size.js');
var getBaseSize = require('../get-base-size/get-base-size.js');
var rem = require('../../../../core/utils/units-converters/rem.js');
var keys = require('../../../../core/utils/keys/keys.js');

function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  var _a;
  const headerHeight = header == null ? void 0 : header.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = (_a = header == null ? void 0 : header.offset) != null ? _a : true;
  if (isPrimitiveSize.isPrimitiveSize(headerHeight)) {
    const baseSize = rem.rem(getBaseSize.getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize.isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem.rem(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem.rem(headerHeight.base);
      }
    }
    keys.keys(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem.rem(headerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem.rem(headerHeight[key]);
        }
      }
    });
  }
  if (header == null ? void 0 : header.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

exports.assignHeaderVariables = assignHeaderVariables;
//# sourceMappingURL=assign-header-variables.js.map
