import { useMantineTheme, parseThemeColor } from '@mantine/core';

function useMantineLogoColors({ color, inverted }) {
  const theme = useMantineTheme();
  const parsedColor = parseThemeColor({ color: color || "blue", theme });
  const mainColor = parsedColor.isThemeColor ? theme.colors[parsedColor.color][5] : color;
  return {
    background: inverted ? theme.white : mainColor,
    color: inverted ? mainColor : theme.white
  };
}

export { useMantineLogoColors };
//# sourceMappingURL=use-mantine-logo-colors.js.map
