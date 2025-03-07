'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

function useMantineLogoColors({ color, inverted }) {
  const theme = core.useMantineTheme();
  const parsedColor = core.parseThemeColor({ color: color || "blue", theme });
  const mainColor = parsedColor.isThemeColor ? theme.colors[parsedColor.color][5] : color;
  return {
    background: inverted ? theme.white : mainColor,
    color: inverted ? mainColor : theme.white
  };
}

exports.useMantineLogoColors = useMantineLogoColors;
//# sourceMappingURL=use-mantine-logo-colors.js.map
