'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

exports.getPrimaryShade = getPrimaryShade;
//# sourceMappingURL=get-primary-shade.js.map
