'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

function getSizesVariables(theme, themeKey, name) {
  return Object.keys(theme[themeKey]).reduce((acc, size) => {
    acc[size] = `var(--mantine-${name}-${size})`;
    return acc;
  }, {});
}
function getBreakpointValue(value, theme) {
  return value in theme.breakpoints ? theme.breakpoints[value] : core.em(value);
}
function themeToVars(theme) {
  const mergedTheme = core.mergeMantineTheme(core.DEFAULT_THEME, theme);
  const fontSizes = getSizesVariables(mergedTheme, "fontSizes", "font-size");
  const lineHeights = getSizesVariables(mergedTheme, "lineHeights", "line-height");
  const shadows = getSizesVariables(mergedTheme, "shadows", "shadow");
  const radius = getSizesVariables(mergedTheme, "radius", "radius");
  const spacing = getSizesVariables(mergedTheme, "spacing", "spacing");
  const headings = Object.keys(mergedTheme.headings).reduce(
    (acc, heading) => {
      acc[heading] = {
        fontSize: `var(--mantine-${heading}-font-size)`,
        lineHeight: `var(--mantine-${heading}-line-height)`,
        fontWeight: `var(--mantine-${heading}-font-weight)`
      };
      return acc;
    },
    {}
  );
  const colors = Object.keys(mergedTheme.colors).reduce(
    (acc, color) => {
      acc[color] = {
        0: `var(--mantine-color-${color}-0)`,
        1: `var(--mantine-color-${color}-1)`,
        2: `var(--mantine-color-${color}-2)`,
        3: `var(--mantine-color-${color}-3)`,
        4: `var(--mantine-color-${color}-4)`,
        5: `var(--mantine-color-${color}-5)`,
        6: `var(--mantine-color-${color}-6)`,
        7: `var(--mantine-color-${color}-7)`,
        8: `var(--mantine-color-${color}-8)`,
        9: `var(--mantine-color-${color}-9)`,
        filled: `var(--mantine-color-${color}-filled)`,
        filledHover: `var(--mantine-color-${color}-filled-hover)`,
        light: `var(--mantine-color-${color}-light)`,
        lightHover: `var(--mantine-color-${color}-light-hover)`,
        lightColor: `var(--mantine-color-${color}-light-color)`,
        outline: `var(--mantine-color-${color}-outline)`,
        outlineHover: `var(--mantine-color-${color}-outline-hover)`
      };
      return acc;
    },
    {
      white: "var(--mantine-color-white)",
      black: "var(--mantine-color-black)",
      primary: "var(--mantine-primary-color-filled)",
      text: "var(--mantine-color-text)",
      body: "var(--mantine-color-body)",
      error: "var(--mantine-color-error)",
      placeholder: "var(--mantine-color-placeholder)",
      anchor: "var(--mantine-color-anchor)",
      default: "var(--mantine-color-default)",
      defaultHover: "var(--mantine-color-default-hover)",
      defaultColor: "var(--mantine-color-default-color)",
      defaultBorder: "var(--mantine-color-default-border)",
      dimmed: "var(--mantine-color-dimmed)"
    }
  );
  return {
    scale: "var(--mantine-scale)",
    cursorType: "var(--mantine-cursor-type)",
    webkitFontSmoothing: "var(--mantine-webkit-font-smoothing)",
    mozFontSmoothing: "var(--mantine-moz-font-smoothing)",
    lineHeight: "var(--mantine-line-height)",
    fontFamily: "var(--mantine-font-family)",
    fontFamilyMonospace: "var(--mantine-font-family-monospace)",
    fontFamilyHeadings: "var(--mantine-font-family-headings)",
    headingFontWeight: "var(--mantine-heading-font-weight)",
    radiusDefault: "var(--mantine-radius-default)",
    breakpoints: mergedTheme.breakpoints,
    fontSizes,
    lineHeights,
    shadows,
    radius,
    headings,
    spacing,
    colors,
    rtlSelector: '[dir="rtl"] &',
    darkSelector: '[data-mantine-color-scheme="dark"] &',
    lightSelector: '[data-mantine-color-scheme="light"] &',
    smallerThan: (breakpoint) => `(max-width: ${getBreakpointValue(breakpoint, mergedTheme)})`,
    largerThan: (breakpoint) => `(min-width: ${getBreakpointValue(breakpoint, mergedTheme)})`
  };
}

exports.themeToVars = themeToVars;
//# sourceMappingURL=theme-to-vars.js.map
