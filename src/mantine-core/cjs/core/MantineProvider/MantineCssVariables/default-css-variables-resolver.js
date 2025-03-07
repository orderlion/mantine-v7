'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getPrimaryShade = require('../color-functions/get-primary-shade/get-primary-shade.js');
var rem = require('../../utils/units-converters/rem.js');
var keys = require('../../utils/keys/keys.js');
var rgba = require('../color-functions/rgba/rgba.js');

function assignSizeVariables(variables, sizes, name) {
  keys.keys(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
const defaultCssVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade.getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade.getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem.rem(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": theme.colors.red[6],
      "--mantine-color-placeholder": theme.colors.gray[5],
      "--mantine-color-anchor": theme.colors[theme.primaryColor][lightPrimaryShade],
      "--mantine-color-default": theme.white,
      "--mantine-color-default-hover": theme.colors.gray[0],
      "--mantine-color-default-color": theme.black,
      "--mantine-color-default-border": theme.colors.gray[4]
    },
    dark: {
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": theme.colors.dark[7],
      "--mantine-color-error": theme.colors.red[9],
      "--mantine-color-placeholder": theme.colors.dark[3],
      "--mantine-color-anchor": theme.colors[theme.primaryColor][4],
      "--mantine-color-default": theme.colors.dark[6],
      "--mantine-color-default-hover": theme.colors.dark[5],
      "--mantine-color-default-color": theme.white,
      "--mantine-color-default-border": theme.colors.dark[4]
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  keys.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    const lightFilledHover = lightPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][lightPrimaryShade + 1];
    const darkFilledHover = darkPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][darkPrimaryShade + 1];
    result.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)";
    result.light[`--mantine-color-${color}-filled`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--mantine-color-${color}-light`] = rgba.rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--mantine-color-${color}-light-hover`] = rgba.rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--mantine-color-${color}-light-color`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-outline`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-outline-hover`] = rgba.rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );
    result.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)";
    result.dark[`--mantine-color-${color}-filled`] = theme.colors[color][darkPrimaryShade];
    result.dark[`--mantine-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--mantine-color-${color}-light`] = rgba.rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.1
    );
    result.dark[`--mantine-color-${color}-light-hover`] = rgba.rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.12
    );
    result.dark[`--mantine-color-${color}-light-color`] = theme.colors[color][Math.max(darkPrimaryShade - 3, 0)];
    result.dark[`--mantine-color-${color}-outline`] = theme.colors[color][Math.max(darkPrimaryShade - 4, 0)];
    result.dark[`--mantine-color-${color}-outline-hover`] = rgba.rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
    );
  });
  const headings = theme.headings.sizes;
  keys.keys(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

exports.defaultCssVariablesResolver = defaultCssVariablesResolver;
//# sourceMappingURL=default-css-variables-resolver.js.map
