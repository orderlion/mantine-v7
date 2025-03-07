'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getThemeColor = require('../get-theme-color/get-theme-color.js');

function getGradient(gradient, theme) {
  const merged = {
    from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
    to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
    deg: (gradient == null ? void 0 : gradient.deg) || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor.getThemeColor(merged.from, theme);
  const toColor = getThemeColor.getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

exports.getGradient = getGradient;
//# sourceMappingURL=get-gradient.js.map
