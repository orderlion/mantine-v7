'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getBaseSize = require('../get-base-size/get-base-size.js');
var getPaddingValue = require('../get-padding-value/get-padding-value.js');
var isPrimitiveSize = require('../is-primitive-size/is-primitive-size.js');
var isResponsiveSize = require('../is-responsive-size/is-responsive-size.js');
var keys = require('../../../../core/utils/keys/keys.js');

function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize.isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue.getPaddingValue(getBaseSize.getBaseSize(padding));
  }
  if (isResponsiveSize.isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue.getPaddingValue(padding.base);
    }
    keys.keys(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue.getPaddingValue(padding[key]);
      }
    });
  }
}

exports.assignPaddingVariables = assignPaddingVariables;
//# sourceMappingURL=assign-padding-variables.js.map
