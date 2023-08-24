'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseThemeColor = require('../parse-theme-color/parse-theme-color.js');
var getGradient = require('../get-gradient/get-gradient.js');
var darken = require('../darken/darken.js');
var rgba = require('../rgba/rgba.js');
var rem = require('../../../utils/units-converters/rem.js');

const defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient
}) => {
  const parsed = parseThemeColor.parseThemeColor({ color, theme });
  if (variant === "filled") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: "var(--mantine-color-white)",
          border: `${rem.rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: "var(--mantine-color-white)",
        border: `${rem.rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken.darken(color, 0.1),
      color: "var(--mantine-color-white)",
      border: `${rem.rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem.rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba.rgba(parsedColor, 0.1),
        hover: rgba.rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem.rem(1)} solid transparent`
      };
    }
    return {
      background: rgba.rgba(color, 0.1),
      hover: rgba.rgba(color, 0.12),
      color,
      border: `${rem.rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem.rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba.rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem.rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba.rgba(color, 0.05),
      color,
      border: `${rem.rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem.rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba.rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem.rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba.rgba(color, 0.12),
      color,
      border: `${rem.rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem.rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem.rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem.rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken.darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem.rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken.darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem.rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken.darken(theme.white, 0.01),
      color,
      border: `${rem.rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient.getGradient(gradient, theme),
      hover: getGradient.getGradient(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem.rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

exports.defaultVariantColorsResolver = defaultVariantColorsResolver;
//# sourceMappingURL=default-variant-colors-resolver.js.map
